import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ICommitsData from '../types/Commits';

const crystalGitHubApiToken = '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';

const Commits: React.FunctionComponent = () => {
  const [totalCommits, setTotalCommits] = useState<number>(0)
  const [commitList, setCommitList] = useState<ICommitsData[]>([]);
  const [apiPage, setApiPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, repo } = useParams<{ user: string, repo: string }>();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, repo, apiPage])

  const getData = () => {
    setLoading(true);
    // get total number of commits
    fetch(`https://api.github.com/repos/${user}/${repo}/contributors`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${crystalGitHubApiToken}`,
      }),
    })
      .then((res: any) => res.json())
      .then((result) => {
        setTotalCommits(result[0].contributions + 1)
      });

    // get each commit details
    fetch(`https://api.github.com/repos/${user}/${repo}/commits?page=${apiPage}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${crystalGitHubApiToken}`,
      }),
    })
      .then((res: any) => res.json())
      .then(
        (result) => {
          setLoading(false);
          if (result.length) {
            const list: ICommitsData[] = result.map((item: any) => ({
              date: formatDate(item.commit.author.date),
              author: item.commit.author.name,
              message: item.commit.message,
              url: item.html_url
            }))
            setCommitList([...commitList, ...list]);
          } else {
            window.history.replaceState(null, 'Does Not Exist', '/does/not/exist')
          }
        },
        (error: Error) => {
          console.log(error)
        }
      )
  }

  const formatDate = (data: string) => {
    let rawDate = new Date(data)
    let year = rawDate.getFullYear();
    let month = rawDate.toLocaleString('default', { month: 'long' });
    let date = rawDate.getDate();
    let time = rawDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    return `${month} ${date}, ${year} at ${time}`;
  }

  return (
    <main>
      {loading ? <div>loading commits</div> : null}
      {
        commitList.length !== 0 ? (
          <div className='container'>
            <h3>Commit Feed</h3>
            <h4>
              Showing {commitList.length} results for /{user}/{repo}
            </h4>
            <section className="commits-wrapper">
              {commitList &&
                commitList.map((commit, commitIndex) => (
                  <div className="commit__row" key={commitIndex}>
                    <div className="commit__time">{commit.date}</div>
                    <a href={commit.url} className="commit__message" target="_blank" rel="noreferrer">
                      {commit.message}
                    </a>
                    <div className="commit__author">{commit.author}</div>
                  </div>
                ))}
            </section>
            <div className="button__load-more">
              {commitList.length < totalCommits ?
                <button onClick={() => setApiPage(apiPage + 1)}>Load More</button>
                : <div>end of commit history</div>
              }
            </div>
          </div>
        ) : (
          <div className='container'>
            <h4>
              Repo {repo} from {user} doesn't exist
            </h4>
            <div className="form__item">
              <button className='button'>
                <Link to="/">Back to search</Link>
              </button>
            </div>
          </div>
        )
      }
    </main>
  );
};

export default Commits;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FunctionComponent = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

  return (
    <main className='container'>
      <form onSubmit={(e: any) => {
        e.preventDefault();
        navigate(`/${user}/${repo}`)
      }} className='form__wrapper'>
        <div className='form__item'>
          <label htmlFor='user'>Github User/Org: </label>
          <input
            type='text'
            placeholder='Enter a GitHub username or org name'
            className='form__input'
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </div>
        <div className='form__item'>
          <label htmlFor='repo'>Github Repo: </label>
          <input
            type='text'
            placeholder='Enter a repo for the above GitHub account'
            className='form__input'
            value={repo}
            onChange={e => setRepo(e.target.value)}
          />
        </div>
        <button className='' type='submit'>
          Get Commit Feed
        </button>
      </form>
    </main>
  )
}

export default Search;

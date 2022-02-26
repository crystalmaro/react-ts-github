import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Commits from './components/Commits';
import Search from './components/Search';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:user/:repo' element={<Commits />} />
      </Routes>
    </Router>
  );
}

export default App;

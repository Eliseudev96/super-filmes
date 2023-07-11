import React from 'react';
import './App.css';
import Menu from './menu';
import MovieImage from './list'
const App = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <MovieImage/>
    </div>
  );
};

export default App;

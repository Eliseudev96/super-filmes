import React, { useState } from 'react';
import { MovieContext } from './MovieContext';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Menu from './menu';
import MovieList from './list';

const App = () => {
  const [iframeUrl, setIframeUrl] = useState('');

  return (
    <MovieContext.Provider value={{ iframeUrl, setIframeUrl }}>
      <div className='app-container'>
        <header>
          <Menu />
        </header>
        <Analytics />
        <MovieList />
      </div>
    </MovieContext.Provider>
  );
};

export default App;

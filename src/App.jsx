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
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7267895515560863'
          crossorigin='anonymous'
        ></script>
        <script
          type='text/javascript'
          src='//pl20040876.highwaycpmrevenue.com/73/28/11/732811c6c6afcb41c45722b48bb407d8.js'
        ></script>
        <script
          type='text/javascript'
          src='//pl20040936.highwaycpmrevenue.com/36/4a/7d/364a7dcd2cfac2e791b464b20cd412fd.js'
        ></script>
        <Analytics />
        <MovieList />
      </div>
    </MovieContext.Provider>
  );
};

export default App;

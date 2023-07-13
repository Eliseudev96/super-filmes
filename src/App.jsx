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
          <script
            type='text/javascript'
            src='https://cdn.diclotrans.com/sdk/v1/17302/e27e891ef85e2616af4f8d55873ac5c992400d0f/lib.js'
          ></script>
          <Menu />
        </header>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7267895515560863'
          crossorigin='anonymous'
        ></script>
        <Analytics />

        <MovieList />
      </div>
    </MovieContext.Provider>
  );
};

export default App;

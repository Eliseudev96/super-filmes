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
        <ins
          class='adsbygoogle'
          style='display:block'
          data-ad-client='ca-pub-7267895515560863'
          data-ad-slot='1981352116'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <Analytics />
        <MovieList />
      </div>
    </MovieContext.Provider>
  );
};

export default App;

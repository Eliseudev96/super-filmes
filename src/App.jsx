import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Menu from './menu';
import MovieImage from './list';
const App = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <Analytics />
      <MovieImage />
    </div>
  );
};

export default App;

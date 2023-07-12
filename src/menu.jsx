import React, { useState, useContext, useRef, useEffect } from 'react';
import './menu.css';
import { MovieContext } from './MovieContext';
import data from './data.json';

const Menu = () => {
  const { setIframeUrl } = useContext(MovieContext);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const resultsRef = useRef();

  const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Filmes em Destaque', link: '/destaques' },
    { text: 'Minha Lista', link: '/lista' },
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setResults(filteredMovies);
  };

  const handleMovieClick = (url) => {
    setIframeUrl(url);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setResults([]);
        setSearch(''); // Limpa a pesquisa
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.link}>{menuItem.text}</a>
          </li>
        ))}
        <li>
          <form>
            <input
              type='text'
              placeholder='Buscar'
              value={search}
              onChange={handleSearchChange}
            />
          </form>
          {results.length > 0 && (
            <div className='results-container' ref={resultsRef}>
              {results.map((result, index) => (
                <div
                  key={index}
                  className='result-item'
                  onClick={() => handleMovieClick(result.iframeUrl)}
                >
                  <img src={result.src} alt={result.title} />
                  <h2>{result.title}</h2>
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

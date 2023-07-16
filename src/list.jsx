import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from './MovieContext';
import data from './data.json';
import './list.css';

const MovieCard = ({ src, title, description, iframeUrl }) => {
  const { setIframeUrl } = useContext(MovieContext);

  const handleClick = () => {
    setIframeUrl(iframeUrl);
  };

  return (
    <div className='movie-card' onClick={handleClick}>
      <img className='movie-image' src={src} alt={title} />
      <div className='movie-description'>
        <h2 className='movie-title'>{title}</h2>
        <p className='movie-details'>{description}</p>
      </div>
    </div>
  );
};

const SkeletonMovieCard = () => {
  return (
    <div className='skeleton-movie-card'>
      <div className='skeleton-image' />
      <div className='skeleton-description'>
        <div className='skeleton-title'></div>
        <div className='skeleton-details'></div>
      </div>
    </div>
  );
};

const MovieList = () => {
  const { iframeUrl, setIframeUrl } = useContext(MovieContext);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const closeModal = () => setIframeUrl('');
  const moviesPerPage = 12;

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if ((page + 1) * moviesPerPage < data.length) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='movie-list'>
        {isLoading
          ? Array(moviesPerPage)
              .fill()
              .map((_, index) => <SkeletonMovieCard key={index} />)
          : data
              .slice(page * moviesPerPage, (page + 1) * moviesPerPage)
              .map((movie, index) => (
                <MovieCard
                  key={index}
                  src={movie.src}
                  title={movie.title}
                  description={movie.description}
                  iframeUrl={movie.iframeUrl}
                />
              ))}
      </div>
      {iframeUrl && (
        <div className='modal'>
          <button onClick={closeModal}>Close</button>
          <iframe
            id='EmbedderContainer'
            src={iframeUrl}
            width='100%'
            height='100%'
            frameborder='0'
            title='movie'
            allowFullScreen
          />
        </div>
      )}
      <div className='pagination'>
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={(page + 1) * moviesPerPage >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;

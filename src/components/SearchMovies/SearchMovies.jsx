import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/getMovieByName';
import { MoviesList } from 'components/MoviesList/Movies.List';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect } from 'react';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieResults, setMovieResults] = useState(null);
  const requestMovie = searchParams.get('movie') ?? '';

  const getMoviesData = async () => {
    if (requestMovie === '') {
      return;
    }
    const { results } = await getMovieByName(requestMovie);
    setMovieResults(results);
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const onChange = name => {
    setSearchParams(name !== '' ? { movie: name } : {});
  };

  return (
    <>
      <SearchBox
        handleSubmit={getMoviesData}
        onChange={onChange}
        value={requestMovie}
      />
      {movieResults && <MoviesList movies={movieResults} />}
    </>
  );
};

import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import mostPopularActions from '../../redux/MostPopular/actions';
import mostPopularSelectors from '../../redux/MostPopular/selectors';

const MostPopular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostPopularActions.initMostPopular());
  }, []);

  const movies = useSelector(mostPopularSelectors.selectMovies);

  const movieElements = movies.map((movie) => (
    <div key={movie.id}>
      {movie.title}
    </div>
  ));

  return (
    <div>
      {movieElements}
    </div>
  );
};

export default MostPopular;

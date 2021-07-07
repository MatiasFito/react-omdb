import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MovieCard';
import mostPopularActions from '../../redux/MostPopular/actions';
import mostPopularSelectors from '../../redux/MostPopular/selectors';

const MostPopular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostPopularActions.initMostPopular());
  }, []);

  const movies = useSelector(mostPopularSelectors.selectMovies);

  const movieElements = movies.map((movie) => (
    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
      <MovieCard movie={movie} />
    </Grid>
  ));

  return (
    <Grid spacing={4} alignItems="center" container>
      {movieElements}
    </Grid>
  );
};

export default MostPopular;

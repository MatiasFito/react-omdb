import React, { useState } from 'react';
import propTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const MovieCard = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMouseEnter = () => setShowMoreInfo(true);
  const handleMouseLeave = () => setShowMoreInfo(false);

  const useStyles = makeStyles({
    root: {
      width: 300,
    },
    actions: {
      borderColor: 'pink',
      borderWidth: '5px',
      borderStyle: 'solid',
      '&:hover': {
        borderColor: 'red',
        borderWidth: '5px',
        borderStyle: 'solid',
      },
    },
    moreInfoRoot: {
      position: 'absolute',
      top: 0,
      left: 0,
      textAlign: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      cursor: 'pointer',
    },
    moreInfoText: {
      color: '#FFFFFF',
      lineHeight: '440px',
      fontWeight: 700,
    },
    poster: {
      height: 440,
      width: 290,
      backgroundSize: 'contain',
    },
  });

  const {
    movie: {
      title,
      poster,
      rating,
      year,
    },
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea
        className={classes.actions}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          className={classes.poster}
          image={poster}
          title={title}
        />
        {showMoreInfo && (
          <div className={classes.moreInfoRoot}>
            <Typography className={classes.moreInfoText} variant="body1">
              {`Rating: ${rating} / 10`}
            </Typography>
          </div>
        )}
      </CardActionArea>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {year}
      </Typography>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    genre: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;

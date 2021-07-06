import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  title: {
    backgroundColor: '#F5C518',
    fontWeight: 700,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="baseline">
      <Grid item>
        <Typography variant="h2" className={classes.title}>
          OMDb
        </Typography>
      </Grid>
      <Grid item style={{ flexGrow: 1 }}>
        <Typography variant="h4">
          Open Movie Data Base, now with React!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Map from './map';
import Header from '../Header/Header'

const useStyles = makeStyles(theme => ({
  avatar: {
    '&:hover': {
      cursor: "pointer"
    }
  },
  header1: {
    height: "auto"
  },
  header2: {
    marginRight: theme.spacing(2),
    width: "50%",
  }
}));

const Home = () => {
  
  const classes = useStyles()


  return (
    <AppBar className={classes.header1} position="sticky" color="default" elevation={0}>
      <Header/>
      <Map/>
    </AppBar>
  )
}


export default Home;


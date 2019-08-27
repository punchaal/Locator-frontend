import React from 'react';
import atoms from '../Home/instapaper/components/atoms';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useForm from '../Services/useForm';

const { Divider, Toolbar } = atoms;

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



const Header = () =>{

    const { handleLogoutClick} = useForm();
    const classes = useStyles()
  
  
    return (
<Toolbar narrow>
        <Grid container alignItems="center">
          <Grid item xs style ={{maxWidth : "50%"}}>
            <Grid container alignItems="center" >
              <Divider vertical />
              <Typography variant="h5" >Locator</Typography>
            </Grid>
          </Grid>

          <Grid item className={classes.header2} >
            <Grid container justify="space-around" >
              <Button href="/home" variant="outlined">Home</Button>
              <Button  href="/locations" >Locations</Button>
              <Button onClick={handleLogoutClick}>Logout</Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    )
}

export default Header;
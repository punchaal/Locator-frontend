import React from 'react';
import Grid from '@material-ui/core/Grid';
import useForm from "../Services/useForm";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function AddLocation(props) {
    const {name} = props
    const { values, handleChange,handleFormSubmit} = useForm();
    return(
    <div>
    <form onSubmit = {handleFormSubmit} props={name} onError={errors => console.log(errors)} >
    <Grid container spacing={2} display = "flexbox">
        <TextField 
          onChange={handleChange}
          value={values.location_name}
          autoComplete="Lname"
          name="location_name"
          variant="outlined"
          required
          id="location_name"
          label="Location Name"
          style = {{marginTop: '30px',marginLeft:'400px',marginRight:'30px'}}
          autoFocus
        />
        
        <Button
        type="submit"
        variant="contained"
        color="secondary"
        style = {{marginTop: '30px',marginLeft:'30px',marginRight:'30px',paddingLeft:'100px',paddingRight:'100px'}}
      >
        Save
      </Button>
      </Grid>
    </form>
      </div>
    )}
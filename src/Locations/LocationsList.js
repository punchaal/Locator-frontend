import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useForm from "../Services/useForm";
import TextField from '@material-ui/core/TextField'


const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

export default function Locations(props) {
    console.log(props)
    var [text,setText] = useState("Let's Plan!")
    const [expanded, setExpanded] = React.useState('panel1');
    const [places,setPlaces] = useState([])
    const location = {
    }
    const { values, handleChange,handleFormSubmit} = useForm();

    const handlePanelChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleButtonClick = (text) => {
        text="Let's Plan"? setText("Visited"):setText("Let's Plan!")
    }
  
    const deleteButtonClick = (e)=>{
        const{id} = e.target.parentElement;
        places.splice(id,1)
        setPlaces([...places]);
    }

    return (
        <div>
            <Header />
            {places.map((i)=>(
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')} id={i} >
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" display="flex">
                    <Typography>Location</Typography>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <Button variant="contained" onClick={handleButtonClick} style = {{marginRight:"30px"}}>{text}</Button>
                        <Button variant="contained" onClick = {deleteButtonClick}>Delete</Button>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <form onSubmit = {handleFormSubmit}  onError={errors => console.log(errors)} >
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
          style = {{marginTop: '30px',marginLeft:'150px',marginRight:'30px'}}
          autoFocus
        />
        <TextField 
          onChange={handleChange}
          value={values.location}
          autoComplete="Location"
          name="location"
          variant="outlined"
          required
          id="location"
          label="Location"
          style = {{marginTop: '30px',marginLeft:'30px',marginRight:'30px'}}
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
                </ExpansionPanelDetails>
            </ExpansionPanel>
            ))}
        </div>
    );
};
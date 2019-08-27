import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '90%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
    marginLeft:theme.spacing(10)
  },
  table: {
    minWidth: 650,
  },
}));

function createData(street, province, city, postal) {
  return { street, province,city, postal};
}

const rows = [
  createData('Details'),
  createData('Street: 37783 Coolidge Avenue', 'Province: Virginia', 'City: Richmond','Postal Code: 23277'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Paper className={classes.paper} >
      <Typography component = "div" >
        <Table className={classes.table} size="small"  >
          <TableHead>
            <TableRow style = {{margin:'20px'}} >
              <TableCell style = {{fontSize:'20px'}}>Tanoodle</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" fontWeight={1000} style={{border:'0px',fontSize:'15px',marginBottm:'15px'}}>
                  {row.street}
                </TableCell>
                <TableCell align="right" style={{border:'0px',marginBottm:'15px'}}>{row.province}</TableCell>
                <TableCell align="right" style={{border:'0px',marginBottm:'15px'}}>{row.city}</TableCell>
                <TableCell align="right" style={{border:'0px',marginBottm:'15px'}}>{row.postal}</TableCell>
                <TableCell align="right" style={{border:'0px',marginBottm:'15px'}}></TableCell>
              </TableRow>
            ))}
            <Button variant = "outlined" color="secondary" style= {{marginLeft:'15px',marginBottom:'20px'}}>Delete</Button>
          </TableBody>
        </Table>
        </Typography>
      </Paper>
    </div>
  );
}

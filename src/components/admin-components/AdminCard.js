import React from 'react';
import { reject } from 'q';

//material ui dependencies
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  reject: {
    backgroundColor: '#c96567',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    marginTop: '2rem',
    fontSize: 17,
  },
  approve: {
    backgroundColor: 'seagreen',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(136, 223, 145, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    marginRight: '2rem',
    marginTop: '2rem',
    fontSize: 17,
}}));
  
    



const AdminCard = props => {
  const classes = useStyles();


    return (
        <div className='admin-card'>
            <h5>{props.firstName} {props.lastName}</h5>
            <p>Email: {props.email}</p>
            <Button onClick={() => props.approve(props.id)} variant="contained" className={classes.approve}>
                    Approve
                    <CheckBoxIcon className={classes.rightIcon} />
            </Button>
            <Button onClick={() => props.reject(props.id)} variant="contained" className={classes.reject}>
                    Reject
                    <BlockIcon className={classes.rightIcon} />
            </Button>
        </div>
    )
}

export default AdminCard;



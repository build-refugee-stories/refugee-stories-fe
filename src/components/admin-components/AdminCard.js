import React from 'react';
import { reject } from 'q';

//material ui dependencies
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const AdminCard = props => {
  const classes = useStyles();

  return (
    <div className="admin-card">
      <h5>
        {props.firstName} {props.lastName}
      </h5>
      <p>Email: {props.email}</p>
      <Button
        onClick={() => props.approve(props.id)}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Approve
        <CheckBoxIcon className={classes.rightIcon} />
      </Button>
      <Button
        onClick={() => props.reject(props.id)}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Reject
        <BlockIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
};

export default AdminCard;

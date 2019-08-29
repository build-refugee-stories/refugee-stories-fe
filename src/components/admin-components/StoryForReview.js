import React from 'react';
import { Link } from 'react-router-dom';

//material ui dependencies
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));

const StoryCard = (props) => {

    const classes = useStyles();

    return (
        <div className='story-card'>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <Link to={`dashboard/story/${props.id}`}>
                <button>Review Story</button>
            </Link>
        </div>
    )
}

export default StoryCard;





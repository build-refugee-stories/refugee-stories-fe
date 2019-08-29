import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Header from '../Header.js';
import Footer from '../Footer.js';

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
    fontSize: 30,
  },
}));


const AdminStoryView = (props) => {
    //console.log(props);

    const classes = useStyles();

    const [story, setStory] = useState({});
    const id = props.match.params.id;

    const rejectStory = id => {
        axiosWithAuth()
          .delete(`https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`)
          .then(res => {
            //console.log('DELETE', res);
            props.history.push("/dashboard")
          })
          .catch(error => console.log(error.response))
      };
    
      const approveStory = id => {
        axiosWithAuth()
          .put(`https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`)
          .then(res => {
            //console.log('APPROVE', res);
            props.history.push("/dashboard")
          })
          .catch(error => console.log(error.response))
      };

      const getStory = () => {
        axiosWithAuth()
          .get(
            `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
          )
          .then(res => {
            //console.log('ADMIN REQUEST', res);
            setStory(res.data);
          })
          .catch(error => console.log(error.response));
      };

      useEffect(() => {
        getStory();
      }, []);

      return (
        <div>
          <Header />
          <div className="story-card">
            <h4>{story.title}</h4>
            <img
              className="story-image"
              width="300px"
              alt="Photo of author"
              src={story.imageUrl}
            />
            <p className="p">by {story.author}</p>
            <p className="p story-text">{story.story}</p>
            <Button onClick={() => approveStory(id)} variant="contained" color="primary" className={classes.button}>
                    Approve
                    <CheckBoxIcon className={classes.rightIcon} />
            </Button>
            <Button onClick={() => rejectStory(id)} variant="contained" color="primary" className={classes.button}>
                    Reject
                    <BlockIcon className={classes.rightIcon} />
            </Button>
          </div>
          <Footer />
        </div>
      );


};

export default AdminStoryView;
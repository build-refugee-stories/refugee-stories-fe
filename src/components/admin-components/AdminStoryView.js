import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Header from '../Header.js';
import Footer from '../Footer.js';

const AdminStoryView = (props) => {
    //console.log(props);

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
            <button onClick={() => approveStory(id)}>Approve</button>
            <button onClick={() => rejectStory(id)}>Reject</button>
          </div>
          <Footer />
        </div>
      );


};

export default AdminStoryView;
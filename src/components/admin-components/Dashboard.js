import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import AdminsForReview from './AdminsForReview';
import StoriesForReview from './StoriesForReview';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Dashboard = () => {
  const [adminList, setAdminList] = useState([]);
  const [storyList, setStoryList] = useState([]);

  const getStories = () => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/stories')
      .then(res => {
        console.log(res.data);
        const unapprovedStories = res.data.filter(story => {
          if (story.approved === false) return story;
        });
        setStoryList(unapprovedStories);
      })
      .catch(error => console.log(error.response));
  };

  const getAdmins = () => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/users/pending')
      .then(res => {
        console.log(res);
        setAdminList(res.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStories();
  }, []);

  useEffect(() => {
    getAdmins();
  }, []);

  const rejectAdmin = id => {
    axiosWithAuth()
      .delete(`https://refugee-stories-api-082019.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log('DELETE', res);
        getAdmins();  // fetch admins to update list
      })
      .catch(error => console.log(error.response))
  };

  const approveAdmin = id => {
    axiosWithAuth()
      .put(`https://refugee-stories-api-082019.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log('APPROVE', res);
        getAdmins(); // fetch admins to update list
      })
      .catch(error => console.log(error.response))
  };

  return (
    <div className="dashboard-container">
      <Header />
      <AdminsForReview admins={adminList} reject={rejectAdmin} approve={approveAdmin}/>
      <StoriesForReview stories={storyList} />
      <Footer />
    </div>
  );
};

export default Dashboard;

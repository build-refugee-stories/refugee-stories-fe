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
          if (story.approved == false) return story;
        });
        setStoryList(unapprovedStories);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <h2>DASHBOARD IN PROGRESS</h2>
      <AdminsForReview />
      <StoriesForReview stories={storyList} />
      <Footer />
    </div>
  );
};

export default Dashboard;

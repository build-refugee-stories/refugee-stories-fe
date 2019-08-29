import React from 'react';

import AdminsForReview from './AdminsForReview';
import StoriesForReview from './StoriesForReview';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Dashboard = () => {
  
  return (
    <div className="dashboard-container">
      <Header />
      <AdminsForReview />
      <StoriesForReview />
      <Footer />
    </div>
  );
};

export default Dashboard;

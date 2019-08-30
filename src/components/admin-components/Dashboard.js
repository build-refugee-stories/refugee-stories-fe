import React from 'react';

import AdminsForReview from './AdminsForReview';
import StoriesForReview from './StoriesForReview';
import Header from '../Header.js';
import Footer from '../Footer.js';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="head">
        <Header />
      </div>
      <main className="main-dashboard">
        <AdminsForReview />
        <StoriesForReview />
      </main>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

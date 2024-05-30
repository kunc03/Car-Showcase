import React from 'react';
import UserProfile from '@/context/AuthContext';

const AdminPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>You are in Admin Page</h1>
      <UserProfile />
    </div>
  );
};

export default AdminPage;

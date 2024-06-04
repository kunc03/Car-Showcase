'use client'

import React, { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '@/lib/firebase/init';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
const AdminPage = () => {
  const [userProfile, setUserProfile] = useState<User | null>(null);

  const { user } = useAuthContext()
  const router = useRouter()

  React.useEffect(() => {
      if (user == null) router.push("/")
  }, [user])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfile(user);
      } else {
        setUserProfile(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!userProfile) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className=' border-[1px] border-red-500 p-10 rounded-md shadow-md shadow-red-300'>

        <h1 className='text-2xl font-semibold text-red-600 text-center'>You are in Admin Page</h1>
        <div className=''>
          <h1 className='text-center pb-2'>User Profile</h1>
          <p>
            <strong>Name:</strong> {userProfile.displayName}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

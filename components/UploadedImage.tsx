// 'use client'

// import React, { useEffect, useState } from 'react';
// import { firestore } from '@/lib/firebase/init';
// import { doc, getDoc } from 'firebase/firestore';
// import { useAuthContext } from '@/context/AuthContext';

// const UploadedImage: React.FC = () => {
//   const { user } = useAuthContext();
//   const [profileImage, setProfileImage] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProfileImage = async () => {
//       if (user) {
//         const userDoc = await getDoc(doc(firestore, 'users', user.uid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setProfileImage(userData?.profileImage || null);
//         }
//       }
//     };

//     fetchProfileImage();
//   }, [user]);

//   return (
//     <div>
//       <h1>User Profile</h1>
//       {profileImage ? <img src={profileImage} alt="Profile" /> : <p>No profile image uploaded</p>}
//     </div>
//   );
// };

// export default UploadedImage;

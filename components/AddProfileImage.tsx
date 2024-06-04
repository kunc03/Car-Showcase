// 'use client'

// import React, { useState } from 'react';
// import { storage, firestore } from '@/lib/firebase/init';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, setDoc } from 'firebase/firestore';
// import { useAuthContext } from '@/context/AuthContext'; // Asumsikan Anda memiliki context untuk auth

// const AddProfileImage: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const { user } = useAuthContext();

//   const handleUpload = async () => {
//     if (file && user) {
//       setUploading(true);
//       const storageRef = ref(storage, `profile_images/${user.uid}`);
//       await uploadBytes(storageRef, file);
//       const downloadURL = await getDownloadURL(storageRef);
//       await setDoc(doc(firestore, 'users', user.uid), { profileImage: downloadURL }, { merge: true });
//       setUploading(false);
//       setFile(null);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
//       <button onClick={handleUpload} disabled={uploading || !file}>
//         {uploading ? 'Uploading...' : 'Upload Profile Image'}
//       </button>
//     </div>
//   );
// };

// export default AddProfileImage;

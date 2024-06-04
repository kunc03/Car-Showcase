// pages/api/profiles/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ref, set, push, get } from 'firebase/database';
import { database } from '@/lib/firebase/init';

interface Profile {
  id: string;
  name: string;
  bio: string;
  email: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dbRef = ref(database, 'profiles');

  if (req.method === 'POST') {
    const { name, bio, email } = req.body;
    const newProfileRef = push(dbRef);
    const newProfile: Profile = {
      id: newProfileRef.key as string,
      name,
      bio,
      email,
    };
    await set(newProfileRef, newProfile);
    res.status(201).json(newProfile);
  } else if (req.method === 'GET') {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      res.status(200).json(snapshot.val());
    } else {
      res.status(200).json({});
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

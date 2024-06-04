// pages/api/profiles/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ref, get, update, remove } from 'firebase/database';
import { database } from '@/lib/firebase/init';

interface Profile {
  id: string;
  name: string;
  bio: string;
  email: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const dbRef = ref(database, `profiles/${id}`);

  if (req.method === 'GET') {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      res.status(200).json(snapshot.val());
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } else if (req.method === 'PUT') {
    const { name, bio, email } = req.body;
    const updatedProfile: Profile = {
      id: id as string,
      name,
      bio,
      email,
    };
    await update(dbRef, updatedProfile);
    res.status(200).json(updatedProfile);
  } else if (req.method === 'DELETE') {
    await remove(dbRef);
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

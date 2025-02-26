// pages/api/projects/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db'; // Adjust path based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Request received:', req.method);

    // Handling GET request
    if (req.method === 'GET') {
      console.log('Fetching data from Firestore...');
      
      const snapshot = await db.collection('test').get();  // Make sure 'test' is correct
      console.log('Snapshot data:', snapshot.docs.map(doc => doc.data()));

      const data = snapshot.docs.map(doc => doc.data());
      res.status(200).json(data);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

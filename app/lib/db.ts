// lib/db.ts
import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    console.log('Firebase Admin SDK initialized');
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
  }
} else {
  console.log('Firebase Admin SDK already initialized');
}

const db = admin.firestore();
export default db;

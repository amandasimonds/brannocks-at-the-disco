import { app } from './firebase';
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database';

export const db = getFirestore(app);

export const database = getDatabase();

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

export const Firebase = () => {
	const firebaseConfig = {
		apiKey: process.env.local.REACT_APP_API_KEY,
		authDomain: process.env.local.REACT_APP_AUTH_DOMAINY,
		databaseURL: process.env.local.REACT_APP_DATABASE_URL,
		projectId: process.env.local.REACT_APP_STORAGE_BUCKET,
		storageBucket: process.env.local.REACT_APP_PROJECT_ID,
		messagingSenderId: process.env.local.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.local.REACT_APP_APP_ID,
		measurementId: process.env.local.REACT_APP_MEASUREMENT_ID,
	};

	const app = initializeApp(firebaseConfig);

	useEffect(() => {
		console.log(getFirestore(app));
	});
};

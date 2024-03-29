import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAINY,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_STORAGE_BUCKET,
	storageBucket: process.env.REACT_APP_PROJECT_ID,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(config);

export const auth = getAuth(app);

export default app;

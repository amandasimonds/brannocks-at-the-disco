import React, { useEffect, useState } from 'react';
import app from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';

const Admin = () => {
	// const [guestData, setGuestData] = useState([]);
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [currentUser, setUser] = useState();
	const auth = getAuth();
	const guestData = [];

	const database = getDatabase(app);

	const dbRef = ref(database, 'guests/', +':id');

	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				console.log(data);
				guestData.push(data)
			}
		});
	});

	const checkAuth = () => {
		auth.onAuthStateChanged(function (user) {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				console.log(user, 'no user logged in');
			}
		});
	};

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const doSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log(auth.currentUser, 'signedout');
				checkAuth();
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const signIn = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				setUser(user);
			})
			.catch((error) => {
				alert(`You entered the wrong password.`);
				console.log(auth, enteredEmail, enteredPassword);
				// const errorCode = error.code;
				// const errorMessage = error.message;
			});
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			signIn(event);
		}
	};

	return currentUser ? (
		<div>
			<button className="btn" type="submit" onClick={doSignOut}>
				Sign out of current user
			</button>
			guests
			{guestData.map((item) => (
				<>
					<p key={item}>{item}</p>
				</>
			))}
		</div>
	) : (
		<div className="flex justify-center pt-5 pb-5">
			<div className="flex items-center justify-center gap-4 w-10/12 bg-greenlightest p-4 rounded">
				<div className="flex items-center gap-4">
					<button className="btn" type="submit" onClick={doSignOut}>
						Sign out of current user
					</button>
					<p>|</p>
					Email
					<input
						type="text"
						className="input"
						value={enteredEmail}
						onChange={emailInputChangeHandler}
						onKeyDown={handleEnterKeyDown}
					/>
				</div>
				<div className="flex items-center gap-4">
					Password
					<input
						type="text"
						className="input"
						value={enteredPassword}
						onChange={passwordInputChangeHandler}
						onKeyDown={handleEnterKeyDown}
					/>
				</div>
				<button className="btn" type="submit" onClick={signIn}>
					Enter
				</button>
			</div>
		</div>
	);
};

export default Admin;

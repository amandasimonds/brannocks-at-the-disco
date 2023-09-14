import React, { useState } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebase/auth';

const Admin = () => {
	const [data, setData] = useState([]);

	const db = getDatabase();
	const dbRef = ref(db, 'guests/', +':id');

	// onValue(dbRef, (snapshot) => {
	// 	const data = snapshot.val();
	// 	console.log(data);
	// 	dataPrint.push(data);
	// });

	get(child(ref(db), 'guests/'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				let data = snapshot.val();
				setData(data);
				console.log(data);
			} else {
				console.log('Data not available');
			}
		})
		.catch((error) => {
			console.error(error);
		});

	const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [user, setUser] = useState('');
    const auth = getAuth();

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

    const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const signIn = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
			.then((userCredential) => {
				const user = userCredential.user;
                console.log(user)
                setUser(user)
			})
			.catch((error) => {
				alert(
					`You entered the wrong password.`
				);
				// const errorCode = error.code;
				// const errorMessage = error.message;
			});
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			signIn(event);
		}
	};

	return user ? (
		<div>{JSON.stringify(data)}</div>
	) : (
		<div className="flex justify-center pt-5 pb-5">
			<div className="flex flex-col items-center gap-4 w-10/12 bg-greenlightest p-4 rounded">
				Please sign in
				<input
					type="text"
					className="input"
					value={enteredPassword}
					onChange={passwordInputChangeHandler}
					onKeyDown={handleEnterKeyDown}
				/>
                <input
					type="text"
					className="input"
					value={enteredEmail}
					onChange={emailInputChangeHandler}
					onKeyDown={handleEnterKeyDown}
				/>
				<button className="btn" type="submit" onClick={signIn}>
					Enter
				</button>
			</div>
		</div>
	);
};

export default Admin;

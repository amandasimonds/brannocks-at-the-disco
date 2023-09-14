import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/auth';

export const PasswordProtect = (props) => {
	const [currentUser, setUser] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');

	auth.onAuthStateChanged(function (user) {
		if (user) {
			console.log(user);
			setUser(user);
		} else {
			console.log(user, 'no user logged in');
		}
	});

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const checkPassword = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, 'guest@guest.com', enteredPassword)
			.then((userCredential) => {
				setUser(userCredential.user);
			})
			.catch((error) => {
				alert(
					`You entered the wrong password. Need the password? Email amandasimonds9@gmail.com with your name and phone number, and I'll get it to you soon`
				);
			});
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			checkPassword(event);
		}
	};

	return currentUser ? (
		<div>{props.children}</div>
	) : (
		<div className="flex justify-center pt-5 pb-5 animate-fade-in delay-200">
			<div className="flex flex-col items-center gap-4 w-10/12 bg-greenlightest p-4 rounded">
				Please enter the guest password
				<input
					type="text"
					className="input"
					value={enteredPassword}
					onChange={passwordInputChangeHandler}
					onKeyDown={handleEnterKeyDown}
				/>
				<button className="btn" type="submit" onClick={checkPassword}>
					Enter
				</button>
			</div>
		</div>
	);
};

export default PasswordProtect;

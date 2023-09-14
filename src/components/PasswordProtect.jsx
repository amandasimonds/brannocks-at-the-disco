import React, { useState, useEffect } from 'react';
import { Firebase } from '../firebase/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const PasswordProtect = (props) => {
	useEffect(() => {
		checkAuth();
	}, []);

	const [authorized, setAuthorized] = useState(false);
	const [enteredPassword, setEnteredPassword] = useState('');

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const checkAuth = () => {
		const auth = localStorage.getItem('auth');
		auth ? setAuthorized(true) : setAuthorized(false);
	};

	const checkPassword = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(
			auth,
			'amandasimonds9@gmail.com',
			enteredPassword
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				localStorage.setItem('auth', true);
				checkAuth();
			})
			.catch((error) => {
				alert(
					`You entered the wrong password. Need the password? Email amandasimonds9@gmail.com with your name and phone number, and I'll get it to you soon`
				);
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const handleEnterKeyDown = (event) => {
		if (event.key === 'Enter') {
			checkPassword(event);
		}
	};

	return authorized ? (
		<div>{props.children}</div>
	) : (
		<div className="flex justify-center pt-5 pb-5">
			<Firebase />
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
// console.log(authorized);
// return <div>{props.children}</div>;
// };

export default PasswordProtect;

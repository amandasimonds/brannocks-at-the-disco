import React, { createContext, useContext, useState } from 'react';

export const PasswordProtect = (props) => {
	const AuthContext = createContext(false)
	const [authorized, setAuthorized] = useState(false);
	const [enteredPassword, setEnteredPassword] = useState('');

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const checkPassword = (event) => {
		event.preventDefault();
		console.log(enteredPassword);

		if (enteredPassword === 'intothewoods') {
			setAuthorized(true);
			console.log('hooray');
		} else {
			setAuthorized(false);
		}
	};

	// if (!authorized) {
	// 	console.log('not authorized');
	return !authorized ? (
		<div className="flex justify-center pt-5 pb-5">
			<div className="flex flex-col items-center gap-4 w-10/12 bg-greenlightest p-4 rounded">
				Please enter the guest password
				<input
					type="text"
					className="input"
					value={enteredPassword}
					onChange={passwordInputChangeHandler}
				/>
				<button className="btn" type="submit" onClick={checkPassword}>
					Enter
				</button>
			</div>
		</div>
	) : (
		<p>{props.children}</p>
	);
};
// console.log(authorized);
// return <div>{props.children}</div>;
// };

export default PasswordProtect;

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Header } from './Header';
import Hero from './Hero';
import Bottom from './Bottom';
import Navbar from './Navbar';
import Sections from './Sections';

export const MainPage = (props) => {
	const [currentUser, setUser] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');

	auth.onAuthStateChanged(function (user) {
		if (user) {
			setUser(user);
			console.log(user, currentUser)
		} else if (localStorage.getItem("welcome") === "intothewoodsyeoyeo") {
			console.log("checked local storage")
		} else {
			console.log('no user logged in');
		}
	});

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const checkPassword = (event) => {
		event.preventDefault();
		console.log('checkpw')
		signInWithEmailAndPassword(
			auth,
			'guest@guest.com',
			enteredPassword.toLowerCase()
		)
			.then((userCredential) => {
				console.log('setusercredential')
				setUser(userCredential.user);
				console.log('hey');
				localStorage.setItem("welcome", "intothewoodsyeoyeo")
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

	return (
		<div>
			<Header />
			<Navbar auth={currentUser}/>
			<Hero id="home" />
			{currentUser ? (
				<Sections />
			) : (
				<div id="login" className="flex justify-center pt-5 pb-5 animate-fade-in delay-200">
					<div className="flex flex-col items-center gap-4 w-10/12 bg-greenlightest p-4 rounded">
						Please enter the guest password
						<input
							type="text"
							className="input"
							value={enteredPassword}
							onChange={passwordInputChangeHandler}
							onKeyDown={handleEnterKeyDown}
						/>
						<button
							className="btn"
							type="submit"
							onClick={checkPassword}
						>
							Enter
						</button>
					</div>
				</div>
			)}
			<Bottom />
		</div>
	);
};

export default MainPage;

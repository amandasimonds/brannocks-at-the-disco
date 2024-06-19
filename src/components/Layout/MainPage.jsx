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
			console.log(user, currentUser);
		} else if (localStorage.getItem('welcome') === 'intothewoodsyeoyeo') {
			console.log('checked local storage');
		} else {
			console.log('no user logged in');
		}
	});

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const checkPassword = (event) => {
		event.preventDefault();
		console.log('checkpw');
		signInWithEmailAndPassword(
			auth,
			'guest@guest.com',
			enteredPassword.toLowerCase()
		)
			.then((userCredential) => {
				console.log('setusercredential');
				setUser(userCredential.user);
				console.log('hey');
				localStorage.setItem('welcome', 'intothewoodsyeoyeo');
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
			<Navbar auth={currentUser} />
			<Hero id="home" />
			{currentUser ? (
				<Sections />
			) : (
				<div className="flex flex-col justify-center items-center pt-5 pb-5 animate-fade-in delay-200 w-100 p-4">
					<a
						href="https://www.zola.com/wedding/brannocksimondsweddi/rsvp"
						className="pb-10 pt-4 underline text-5xl font-spinnaker border-solid border-1 border-gray"
					>
						<button className='border-solid border rounded-lg p-4 shadow-lg border-greenlight'>RSVP</button>
					</a>
					<div id="login">
						<div className="flex flex-col items-center gap-4 rounded px-4 text-center">
							To view more info about the wedding, please enter
							the guest password found on your invitation.
							<input
								type="text"
								className="input lowercase"
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
				</div>
			)}
			<Bottom />
		</div>
	);
};

export default MainPage;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [mobileNav, setNav] = useState(false);
	const handleClick = () => setNav(!mobileNav);
	return (
		<div>
			{/* menu */}
			<ul className="hidden md:flex justify-center animate-fade-in">
				<li>Home</li>
				<li>About</li>
				<li>Registry</li>
				<li>Contact</li>
			</ul>
			<div
				onClick={handleClick}
				className={` absolute top-[1rem] right-[1rem] cursor-pointer
					${!mobileNav ? 'md:hidden text-gray ' : 'text-white z-20'}
				`}
			>
				{!mobileNav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!mobileNav
						? 'hidden'
						: 'absolute top-0 right-0 w-full h-screen flex flex-col bg-greenlight text-white justify-center items-center z-10'
				}
			>
				<li className="py-6 text-4xl">Home</li>
				<li className="py-6 text-4xl">About</li>
				<li className="py-6 text-4xl">Registry</li>
				<li className="py-6 text-4xl">Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;

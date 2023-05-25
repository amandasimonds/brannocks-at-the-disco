import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center bg-white px-4 text-gray">
			<div>September 28, 2024 | Thurmont, MD</div>
            <h1>Amanda & Ben</h1>
			{/* menu */}
			<ul className="hidden md:flex">
				<li>Home</li>
				<li>About</li>
				<li>Registry</li>
				<li>Contact</li>
			</ul>
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 right-0 w-full h-screen flex flex-col justify-center items-center'
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

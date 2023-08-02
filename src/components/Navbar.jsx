import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [mobileNav, setNav] = useState(false);
	const handleClick = () => setNav(!mobileNav);
	return (
		<div>
			{/* menu */}
			<ul className="hidden md:flex justify-center animate-fade-in">
				<li><a href="#home">Home</a></li>
				<li><a href="#our-wedding">Our Wedding</a></li>
				<li>Registry</li>
				<li>Contact</li>
			</ul>
			<div
				onClick={handleClick}
				className={` absolute top-[.5rem] right-[.5rem] cursor-pointer
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
				<li className="py-4 text-xl">
					<a href="#home">Home</a>
				</li>
				<li className="py-4 text-xl">
					<a href="#our-wedding">Our Wedding</a>
				</li>
				<li className="py-4 text-xl">Registry</li>
				<li className="py-4 text-xl">Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;

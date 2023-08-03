import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [mobileNav, setNav] = useState(false);
	const handleClick = () => setNav(!mobileNav);
	return (
		<div className="md:sticky top-0 z-10">
			{/* menu */}
			<div className="hidden md:block bg-white relative shadow-md z-10">
				<ul className=" justify-center flex animate-fade-in md:pb-3 md:pt-3 text-graydark">
					<li>
						<a href="#our-wedding">wedding day</a>
					</li>
					<li>
						<a href="#our-wedding">accomodations</a>
					</li>
					<li>
						<a href="#our-wedding">rsvp</a>
					</li>
					<li>
						<a href="#our-wedding">contact</a>
					</li>
				</ul>
			</div>
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
				<li className="py-4 text-xl">
					<a href="#home">Registry</a>
				</li>
				<li className="py-4 text-xl">
					<a href="#our-wedding">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {
	Link
} from 'react-scroll';

const Navbar = () => {
	const navLinks = [
		{
			title: 'our wedding',
			link: 'our-wedding',
		},
		{
			title: 'wedding day',
			link: 'wedding-day',
		},
		{
			title: 'accomodations',
			link: 'accomodations',
		},
		{
			title: 'rsvp',
			link: 'rsvp',
		},
		{
			title: 'contact',
			link: 'contact',
		},
	];
	return (
		<div className="sticky top-0 z-10">
			{/* menu */}
			<div className=" bg-white relative shadow-md z-10">
				<ul className=" justify-center flex flex-wrap md:gap-4 gap-3 animate-fade-in pb-3 pt-3 text-graydark">
					{navLinks.map((link) => (
						<li className="flex gap-1 items-center hover:text-rust">
							<AiFillHeart className="text-rust w-[12px]" />
							<Link
								to={link.link}
								activeClass="active"
								spy={true}
								smooth={'easeInOutCubic'}
								hashSpy={true}
								offset={-100}
								duration={500}
								delay={200}
								isDynamic={true}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = (props) => {
	const navLinks = [
		{
			title: 'our wedding',
			link: 'our-wedding',
		},
		{
			title: 'the weekend',
			link: 'weekend-plan',
		},
		{
			title: 'accommodations',
			link: 'accommodations',
		},
		{
			title: 'rsvp',
			link: 'https://www.zola.com/wedding/brannocksimondsweddi/rsvp',
			external: true,
		},
		{
			title: 'contact',
			link: 'contact',
		},
		{
			title: 'registry',
			link: 'https://www.zola.com/registry/brannocksimondsweddi',
			external: true
		}
	];
	return (
		<div className="sticky top-0 z-10">
			{/* menu */}
			<div className=" bg-white relative shadow-md z-10">
				<ul className=" justify-center flex flex-wrap md:gap-4 gap-3 animate-fade-in pb-3 pt-3 text-graydark">
					{navLinks.map((link) => (
						<li
							key={link.title}
							className="flex gap-1 items-center hover:text-rust"
						>
							<AiFillHeart className="text-rust w-[12px]" />
							{link.external ? (
								<a
									href={link.link}
									target="_blank"
									rel="noreferrer"
								>
									{link.title}
								</a>
							) : (
								<Link
									to={props.auth ? link.link : 'login'}
									activeClass="text-rust"
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
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

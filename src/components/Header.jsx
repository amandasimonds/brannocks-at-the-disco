import React from 'react';
import Navbar from './Navbar';

export const Header = () => {
	return (
		<div className="sticky top-0 w-full flex-col justify-between justify-center bg-white px-4 py-5 text-gray">
			<div className="flex">
				<div className="animate-slide-in-right flex-1 flex-col flex">
					<span>September 28, 2024</span>
					<span>Thurmont, MD</span>
				</div>
				<h1 className='animate-fade-in'>Amanda & Ben</h1>
				<div className="flex-1"></div>
			</div>
			<Navbar />
		</div>
	);
};

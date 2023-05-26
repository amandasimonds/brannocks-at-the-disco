import React from 'react';
import Navbar from './Navbar';

export const Header = () => {
	return (
		<div className="sticky top-0 w-full flex-col absolute z-10 justify-between justify-center bg-white md:p-5 p-2 text-gray">
			<div className="flex">
				<div className="animate-slide-in-right flex-1 flex-col flex">
					<p>September 28, 2024</p>
					<p>Thurmont, MD</p>
				</div>
				<h1 className='animate-fade-in'>Amanda & Ben</h1>
				<div className="flex-1"></div>
			</div>
			<Navbar />
		</div>
	);
};

import React from 'react';

export const Header = () => {
	return (
		<div className="w-full flex gap-4 flex-col items-center bg-white md:p-5 p-2">
			<div className="animate-slide-in-right">
				<p>September 28, 2024</p>
			</div>
			<h1 className="font-helloloved text-[1.5rem] md:text-[3rem] text-greenlight2 animate-fade-in">
				Amanda & Ben
			</h1>
		</div>
	);
};

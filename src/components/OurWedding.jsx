import React from 'react';

const OurWedding = () => {
	return (
		<div className="animate-fade-in-delay">
			<div className="md:w-[33vw] md:p-8 p-4 w-full md:h-[350px] flex items-center justify-center">
				<h2>our wedding</h2>
			</div>
			<div className="flex items-center justify-center flex-col md:flex-row">
				<div className="flex items-center justify-between flex-col md:p-12 p-2">
					<h4>Saturday, September 28, 2024</h4>
				</div>
				<div className="flex items-center justify-between flex-col md:border-l-2 border-green md:p-[5rem] p-4">
					<h4>Mountain Memories at Thorpewood</h4>
					<h4>12805A Mink Farm Rd</h4>
					<h4>Thurmont, MD 21788</h4>
				</div>
			</div>
		</div>
	);
};

export default OurWedding;

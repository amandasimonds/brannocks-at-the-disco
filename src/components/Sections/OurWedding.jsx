import React from 'react';
import Sprout from '../../assets/images/sprout.svg';
import Leaf from '../../assets/images/leaf.svg';

const OurWedding = () => {
	return (
		<div id="our-wedding" className="flex items-center flex-col md:p-8">
			<h1 className="my-6">Our Wedding</h1>
			<div className="mt-2 flex flex-col items-center text-center">
				<h2 className='mb-2'>Saturday, September 28, 2024</h2>
				<h2>3:00 - 9:00 PM</h2>
				<img
					src={Leaf}
					className="w-11 my-5 animate-slide-in-left"
					alt=""
				/>
				<h3 className="mt-2">Mountain Memories at ThorpeWood</h3>
				<a href="https://maps.app.goo.gl/gzHMQhat752wnnAz6">
					<h3>12805A Mink Farm Rd</h3>
					<h3>Thurmont, MD 21788</h3>
				</a>
				<img src={Sprout} alt="" className="mt-10" />
			</div>
		</div>
	);
};

export default OurWedding;

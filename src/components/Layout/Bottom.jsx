import React from 'react';
import SproutVector from '../../assets/images/sprout_vector.svg';

export const Bottom = () => {
	return (
		<div className='flex items-center justify-between w-vw'>
			<img src={SproutVector} className="w-[50vw] animate-slide-in-right" alt="" />
            <p className='md:p-8 animate-fade-in-delay p-4'>
                Created by: <a href="amandaxandra.netlify.app">Amanda Simonds</a>
            </p>
		</div>
	);
};

export default Bottom;

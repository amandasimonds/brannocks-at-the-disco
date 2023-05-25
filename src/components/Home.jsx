import React from 'react';
import BannerPic from '../assets/mountains_Edit.jpg';

const Home = () => {
	return (
		<div className="top-[200px]">
			<img
				src={BannerPic}
				alt="Amanda and Ben in the Rocky Mountains"
			/>
		</div>
	);
};

export default Home;

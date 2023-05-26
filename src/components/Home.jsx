import React from 'react';
import BannerPic from '../assets/mountains_Edit.jpg';
import LeavesVector from '../assets/Leaves Vector.svg';

const Home = () => {
	return (
		<div>
			<div className="w-100"></div>
			<img src={BannerPic} className="animate-fade-in" alt="Amanda and Ben in the Rocky Mountains" />
			<div
				className="animate-slide-in-left w-[66vw] fixed z-100 right-0 top-[480px]"
			>
				<img
					src={LeavesVector}
					alt="White leaves outline"
					className="absolute right-0"
				/>
			</div>
		</div>
	);
};

export default Home;

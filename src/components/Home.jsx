import React from 'react';
import BannerPic from '../assets/mountains_Edit.jpg';
import LeavesVector from '../assets/Leaves Vector.svg';

const Home = () => {
	return (
		<div>
			<div ></div>
			<img src={BannerPic} className="animate-fade-in" alt="Amanda and Ben in the Rocky Mountains" />
			<div
				className="animate-slide-in-left lg:scale-2 lg:top-[700px] md:w-[60vw] w-[30vw] absolute right-0 md:top-[480px] top-[160px]"
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

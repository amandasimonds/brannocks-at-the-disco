import React from 'react';
import BannerPic from '../assets/mountains_Edit.jpg';
import LeavesVector from '../assets/Leaves Vector.svg';

const Home = () => {
	return (
		<div>
			<div className='h-[40vh] md:h-auto overflow-hidden'>
				<img
					src={BannerPic}
					className="animate-fade-in md:object-cover md:scale-[1] object-cover scale-[3] md:top-0 top-[20px] relative"
					alt="Amanda and Ben in the Rocky Mountains"
				/>
			</div>
			<div className="animate-slide-in-left lg:scale-2 md:w-[60vw] w-[30vw] absolute right-0 md:top-[60%] top-[260px]">
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

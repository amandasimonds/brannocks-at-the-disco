import React from 'react';
import WeekendPlan from '../Sections/WeekendPlan';
import Accommodations from '../Sections/Accommodations';
import Contact from '../Sections/Contact';
import OurWedding from '../Sections/OurWedding';

const Sections = () => {
	return (
		<div className="flex flex-col p-6 md:p-10 items-center animate-fade-in md:gap-20 gap-10">
			<OurWedding/>
			<WeekendPlan/>
			<Accommodations/>
			<Contact/>
		</div>
	);
};

export default Sections;

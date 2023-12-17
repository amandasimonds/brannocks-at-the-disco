import React from 'react';
import OurWedding from '../Sections/OurWedding';
import WeddingDay from '../Sections/WeddingDay';
import Accomodations from '../Sections/Accomodations';
import Rsvp from '../Sections/Rsvp';
import Contact from '../Sections/Contact';

const Sections = () => {
	return (
		<div className="flex flex-col p-6 md:p-10 items-center animate-fade-in md:gap-20 gap-10">
			<OurWedding/>
			<WeddingDay/>
			<Accomodations/>
			<Rsvp/>
			<Contact/>
		</div>
	);
};

export default Sections;

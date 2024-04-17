import React from 'react';

const Accomodations = () => {

	return (
		<div id="accomodations" className="w-full">
			<div className="flex flex-col items-center w-full">
				<h1>Accomodations</h1>
				<p className='mt-2'>Please book as soon as possible - it will be a busy weekend in Frederick!</p>
				<h4 className='mt-4'>WEDDING PARTY - you do not need to book. Please contact Charlene at cjsimonds@aol.com for info on your accomodations.</h4>
				<h3 className='mt-4'>Our wedding hotel block is at:</h3>
				<h3>Hampton Inn & Suites Fort Dedrick</h3>
				<h3>1565 Opossumtown Pike Frederick, MD 21702</h3>
				<p className='mt-2 md:mx-12'>The complimentary coach shuttle will be leaving and returning to this hotel. Any wedding guest can take the shuttle, whether you are staying at the hotel or not.</p>
				<p className='mt-2 md:mx-12'>If you are checking in on Saturday and wish to use the shuttle, please remember that the shuttle leaves at 2:15pm, which is before regular hotel check in time. If you would like to check into your room before going to the wedding, please don't forget to ask for early check in!</p>
				<h3 className='my-4'><button className="btn" href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=FDRHSHX&groupCode=CHHSIW&arrivaldate=2024-09-27&departuredate=2024-09-29&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT">Click Here</button> to book a hotel block room</h3>
				<p className='md:mx-12'>If you prefer a king bedroom and there are only double queens available (or vice versa), go to the Hampton Inn Fort Dedrick website to book there. On the day of check in, let the desk know you are part of our hotel block. We plan to move any extra guest booked hotel rooms into block!</p>
				<h4 className='mt-4'>Other Hotel Options:</h4>
				<p>There are many other hotel and airbnb options around Frederick that could suit your stay. These are our suggestions:</p>
			</div>
		</div>
	);
};

export default Accomodations;

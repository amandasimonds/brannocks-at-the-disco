import React from 'react';
import Sprout from '../../assets/images/sprout.svg';

const Accommodations = () => {
	const hotels = [
		{
			name: 'Marriott Springhill Suites',
			link: 'https://www.marriott.com/en-us/hotels/wasfk-springhill-suites-frederick/overview/',
			description:
				'Marriott about 10 minutes away from Frederick and 10 minutes closer to the venue.',
		},
		{
			name: 'Springfield Manor',
			link: 'https://www.springfieldmanor.com/',
			description:
				'Manor style hotel, a bit outside the city but closer to the wedding venue.',
		},
		{
			name: 'Caboose Farm',
			link: 'https://www.springfieldmanor.com/',
			description:
				'Large family style houses for rent, about 10 minutes from the venue and 30 minutes from Frederick.',
		},
	];

	return (
		<div id="accommodations" className="md:w-3/5">
			<div className="flex flex-col items-center w-full text-center">
				<h1>Accommodations</h1>
				<p className="mt-2">
					Please book ASAP - it will be a busy weekend in Frederick!
				</p>
				<p className="mt-6">
					<span className="font-semibold">Wedding Party</span>: you
					will be staying at the Hampton Inn Fort Detrick, but you do
					not need to book. Please contact Charlene at
					charlenesimonds@gmail.com for info on your accommodations.
				</p>
				<a
					target="_blank"
					href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=FDRHSHX&groupCode=CHHSIW&arrivaldate=2024-09-27&departuredate=2024-09-29&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
					rel="noreferrer"
				>
					<button className="bg-greenlight2 hover:bg-greenlight3 my-6 py-3 text-lg font-spinnaker px-4 rounded-md text-white cursor-pointer">
						<p>Book at our hotel block:</p>
						<p>Hampton Inn & Suites Fort Detrick</p>
					</button>
				</a>
				<a
					href="https://maps.app.goo.gl/F4HvgvnzGwAvVvSS7"
					className="underline"
				>
					1565 Opossumtown Pike
					<br></br>Frederick, MD 21702
				</a>
				<div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8 text-left">
					<span>
						<h3>Transportation?</h3>
						<p>
							A complimentary coach shuttle will be going to the
							Ceremony and returning to the Hampton Inn Fort Detrick hotel. Any wedding
							guest can take the shuttle!
						</p>
					</span>
					<span>
						<h3>When does the Shuttle leave?</h3>
						<p>
							The shuttle leaves at 2:15pm on Saturday, before
							regular check-in time. If you would like to check
							into your room on Saturday, before going to the
							wedding, please ask for early check-in and plan
							accordingly.
						</p>
					</span>
					<span>
						<h3>No rooms left in the hotel block?</h3>
						<p>
							If there are no rooms left in the hotel block, book
							on the{' '}
							<a
								className="underline"
								href="https://www.hilton.com/en/hotels/fdrhshx-hampton-suites-frederick-fort-detrick/"
							>
								Hampton Inn Fort Detrick website
							</a>
							. On the day of check in, let the desk know you are
							part of our hotel block. We plan to move any extra
							guest booked hotel rooms into our block!
						</p>
					</span>
				</div>

				<img
					src={Sprout}
					className="md:w-20 my-10 animate-slide-in-right"
					alt=""
				/>

				<div className="flex flex-col gap-4 mt-4 text-left">
					<h3 className="mt-6">More Accomodation Options:</h3>
					{hotels.map((hotel) => (
						<span>
							<a
								href={hotel.link}
								target="_blank"
								className="underline"
								rel="noreferrer"
							>
								{hotel.name}
							</a>
							<p>{hotel.description}</p>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accommodations;

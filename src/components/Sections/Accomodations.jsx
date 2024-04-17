import React from 'react';

const Accomodations = () => {
	return (
		<div id="accomodations" className="w-full md:w-1/2">
			<div className="flex flex-col items-center w-full text-center">
				<h1>Accomodations</h1>
				<p className="mt-2">
					Please book ASAP - it will be a busy weekend in Frederick!
				</p>
				<p className="mt-6">
					<span class="font-semibold">Wedding Party</span>: you do not need to book. Please contact
					Charlene at charlenesimonds@gmail.com for info on your
					accomodations.
				</p>
				<span class="bg-greenlight2 hover:bg-greenlight3 my-6 py-3 text-lg font-spinnaker px-4 rounded-md text-white cursor-pointer">
					<p>Book at our hotel block:</p>
					<p>Hampton Inn & Suites Fort Dedrick</p>
				</span>
				<a
					href="https://maps.app.goo.gl/F4HvgvnzGwAvVvSS7"
					className="font-bold underline"
				>
					1565 Opossumtown Pike
					<br></br>Frederick, MD 21702
				</a>
				<div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8 text-left">
					<span>
						<h3>Transportation?</h3>
						<p>
							A complimentary coach shuttle will be going to the
							Ceremony and returning to this hotel. Any wedding
							guest can take the shuttle!
						</p>
					</span>
					<span>
						<h3>When does the Shuttle leave?</h3>
						<p>
							The shuttle leaves at 2:15pm on Saturday, before
							regular check-in time. If you would like to check
							into your room on Saturday, before going to the
							wedding, please ask for early check in and plan
							accordingly.
						</p>
					</span>
					<span>
						<h3>No rooms left in the hotel block?</h3>
						<p>
							If there are no rooms left in the hotel block, book
							on the{' '}
							<a className="font-bold underline" href="https://www.hilton.com/en/hotels/fdrhshx-hampton-suites-frederick-fort-detrick/">
								Hampton Inn Fort Dedrick website
							</a>
							. On the day of check in, let the desk know you are
							part of our hotel block. We plan to move any extra
							guest booked hotel rooms into our block!
						</p>
					</span>
				</div>
				<h4 className="mt-6">Other Hotel Options:</h4>
				<a href="https://www.marriott.com/en-us/hotels/wasfk-springhill-suites-frederick/overview/" className="font-bold underline">
					Marriot Springfield Manor
				</a>
			</div>
		</div>
	);
};

export default Accomodations;

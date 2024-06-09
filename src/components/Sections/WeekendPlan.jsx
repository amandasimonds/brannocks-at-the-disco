import React from 'react';
import Branch from '../../assets/images/branch.svg';

const WeekendPlan = () => {
	const rows = [
		{
			time: '2:15PM',
			event: 'Shuttle to the Ceremony',
			location: 'Hampton Inn Fort Detrick',
			misc: [
				'Everyone is welcome to board the complimentary shuttle to the venue.',
				'It will leave at 2:15PM from the hotel at 1565 Opossumtown Pike, Frederick.',
				'*If you are checking into the hotel on Saturday, plan accordingly as regular check in time is after 3pm.',
			],
		},
		{
			time: '3:00 - 3:30PM',
			event: 'Ceremony',
			location: 'Mountain Memories ThorpeWood - Pine Cathedral',
			misc: [
				'Attire: Formal. It will be outside, so consider chunky heels over pointy.',
				'Guests may begin arriving at 2:30PM.',
				'If the weather is bad, the ceremony will be held in the pavilion by the Lodge.',
			],
		},
		{
			time: '4:00 - 5:00 PM',
			event: 'Cocktail Hour',
			location: 'The Lodge',
			misc: ['Make your way up to the Lodge for refreshments and music.'],
		},
		{
			time: '5:00 - 8:00 PM',
			event: 'Dinner & Reception',
			location: 'The Lodge & Tree Room',
			misc: [
				'Dinner will be upstairs in the lodge.',
				'Dancing and partying will commence in the Tree Room downstairs!',
			],
		},
		{
			time: '8:00 - 8:30 PM',
			event: 'Farewell',
			location: 'The Lodge',
			misc: [
				'Bid adieu to a beautiful evening!',
				'For those that rode the shuttle, it will depart at 8:30PM and return to the Hampton Inn Fort Detrick hotel.',
			],
		},
		{
			time: '10:00 PM',
			event: 'After Party',
			location: `Brewer's Alley`,
			misc: ['Continue the party at a charming bar in Frederick.'],
		},
	];

	return (
		<div id="weekend-plan" className="w-full">
			<div className="flex flex-col items-center w-full">
				<h1 className="my-6">The Weekend</h1>
				<h2 className="mt-5 mb-4">Friday, September 27th</h2>
				<tr className="w-10 row-divider"></tr>
				<table className='w-full mt-2'>
					<tbody className="flex md:items-center flex-col w-full">
						<tr className="flex md:gap-12 schedule-row p-3 md:p-10 flex-col md:flex-row w-full">
							<td className="flex md:justify-end flex-shrink-0 flex-grow-0 basis-1/4">
								<h3>8:00PM</h3>
							</td>
							<td className="flex flex-col flex-1">
								<h3>Welcome Party</h3>
								<h4>Brewer's Alley</h4>
								<p>Dress code: Semi-formal.</p>
								<p>
									Welcome yourselves to the party, in the heart of downtown
									Frederick!
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<h2 className="mb-4 mt-10">Saturday, September 28th</h2>
				<tr className="w-10 row-divider"></tr>
				<table className='w-full mt-2'>
					{rows.map((row) => (
						<tbody
							key={row.event}
							className="flex md:items-center flex-col w-full"
						>
							<tr className="flex md:gap-12 schedule-row p-3 md:p-10 pr-10 md:pr-20 flex-col md:flex-row w-full">
								<td className="flex md:justify-end flex-shrink-0 flex-grow-0 basis-1/4">
									<h3>{row.time}</h3>
								</td>
								<td className="flex flex-col flex-1">
									<h3>{row.event}</h3>
									<h4>{row.location}</h4>
									{row.misc.map((item) => (
										<p key={item}>{item}</p>
									))}
								</td>
							</tr>
							<tr className="md:w-full lg:w-4/5 row-divider"></tr>
						</tbody>
					))}
				</table>
				<span className='mt-5'></span>
				<img src={Branch} className="w-20 rotate-45" alt="" />
			</div>
		</div>
	);
};

export default WeekendPlan;

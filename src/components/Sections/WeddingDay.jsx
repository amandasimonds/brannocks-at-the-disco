import React from 'react';

const WeddingDay = () => {
	const rows = [
		{
			time: '2:15PM',
			event: 'Shuttle to the Ceremony',
			location: 'Hampton Inn Fort Dedrick',
			misc: [
				'Everyone is welcome to board the complimentary shuttle to the venue.',
				'It will leave at 2:15PM from the hotel at 1565 Opossumtown Pike, Frederick',
				'*If you are checking into the hotel on Saturday, plan accordingly as regular check in time is after 3pm.',
			],
		},
		{
			time: '3:00 - 3:30PM',
			event: 'Ceremony',
			location: 'Mountain Memories ThorpeWood - Pine Cathedral',
			misc: [
				'Guests may begin arriving at 2:30',
				'Ceremony will be outside weather-permitting',
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
				'Dinner will be upstairs in the lodge, and dancing and partying will commence in the Tree Room downstairs!',
			],
		},
		{
			time: '8:00 - 8:30 PM',
			event: 'Farewell',
			location: 'The Lodge',
			misc: [
				'Bid adieu to a beautiful evening! For those that rode the shuttle, it will depart at 8:30PM and return to the hotel.',
			],
		},
		{
			time: '10:00 PM',
			event: 'After Party',
			location: 'Brewers Alley',
			misc: ['Continue the party at a charming bar in Frederick.'],
		},
	];

	return (
		<div id="wedding-day" className="w-full">
			<div className="flex flex-col items-center w-full">
				<h1>Our Wedding</h1>
				<div className="mt-2 flex flex-col items-center text-center">
					<h3>Saturday, September 28, 2024</h3>
					<h3>3:00 - 9:00 PM</h3>
					<p className="mt-2">Mountain Memories at ThorpeWood</p>
					<p>12805A Mink Farm Rd</p>
					<p>Thurmont, MD 21788</p>
					<span className="mt-2 ml-4 mr-4">
						<p>Welcome Party: 8pm, Friday, September 27</p>
						<p>@ Brewer's Alley.</p>
					</span>
				</div>
				<table className="md:m-10 m-5 w-full schedule">
					{rows.map((row) => (
						<tbody key={row.event} className="flex md:items-center flex-col w-full">
							<tr className="flex md:gap-12 schedule-row p-3 md:p-10 flex-col md:flex-row w-full">
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
							<tr className="w-3/4 row-divider"></tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
	);
};

export default WeddingDay;

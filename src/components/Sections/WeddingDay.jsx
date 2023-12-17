import React from 'react';

const WeddingDay = () => {
	const rows = [
		{
			time: '3:00 - 3:30PM',
			event: 'Ceremony',
			location: 'Pine Cathedral',
			misc: [
				'Guests may begin arriving at 2:30',
				'Ceremony will be outside weather-permitting',
			],
		},
		{
			time: '4:00 - 5:00PM',
			event: 'Cocktail Hour',
			location: 'The Lodge',
			misc: [
				'Make your way up to the Lodge for refreshments and music.'
			],
		},
		{
			time: '5:30 - 7:00PM',
			event: 'Dinner',
			location: 'The Lodge',
			misc: ['Dinner will be upstairs inside the Lodge'],
		},
		{
			time: '7:00 - 9:00PM',
			event: 'Reception',
			location: 'The Lodge',
			misc: ['Dancing and partying will commence in the Tree Room downstairs!'],
		},
	];

	return (
		<div id="wedding-day" className="w-full">
			<div className="flex flex-col items-center w-full">
				<h1>Wedding Day</h1>
				<table className="md:m-10 m-5 w-full schedule">
					{rows.map((row) => (
						<div className='flex md:items-center flex-col w-full'>
							<tr className="flex md:gap-12 schedule-row p-3 md:p-10 flex-col md:flex-row w-full">
								<td className="md:w-1/2 flex md:justify-end">
									<h3>{row.time}</h3>
								</td>
								<td className="flex flex-col">
									<h3>{row.event}</h3>
									<h4>{row.location}</h4>
									{row.misc.map((item) => (
										<p>{item}</p>
									))}
								</td>
							</tr>
							<div className="w-3/4 row-divider"></div>
						</div>
					))}
				</table>
			</div>
		</div>
	);
};

export default WeddingDay;

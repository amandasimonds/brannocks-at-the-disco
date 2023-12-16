import React from 'react';

const WeddingDay = () => {
	const rows = [
		{
			time: '3:00 - 4:00PM',
			event: 'Ceremony',
			location: 'Pine Cathedral',
			misc: [
				'Will be outdoors weather permitting',
				'Guests arrive 15 minutes early',
			],
		},
		{
			time: '4:00 - 4:30PM',
			event: 'Cocktail Hour',
			location: 'The Lodge',
			misc: [],
		},
		{
			time: '5:00 - 6:00PM',
			event: 'Dinner',
			location: 'The Lodge',
			misc: [],
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

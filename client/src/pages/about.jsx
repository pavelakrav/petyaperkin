import React from 'react';
import { observer } from 'mobx-react-lite';
import '../styles/about.css';
import '../styles/adaptive.css';
import example_Pic from '../images/p1.jpg';

const about = observer(() => {
	const cardsContent = [
		{
			title: 'Hydrogen',
			text: 'The system can be mounted with H2 fueling stations',
		},
		{
			title: 'Solar power',
			text: 'AWINGEN wind turbines can be equipped with solar panels for additional output',
		},
		{
			title: 'Combination',
			text: 'Units are installed on the rooftops to power residental and industrial buildings',
		},
		{
			title: 'Railroad',
			text: 'Awingen wind turbines perfectly fit the railroad infrastructure both in the cities and in areas.',
		},
	];

	return (
		<div className="cardsList">
			{cardsContent.map((content) => {
				return (
					<div className="card">
						<div className="card__pic">
							<img
								className="photo"
								src={example_Pic}
								alt="pic"
							/>
						</div>
						<div className="card__title">{content.title}</div>
						<div className="card__text">{content.text}</div>
					</div>
				);
			})}
		</div>
	);
});

export default about;

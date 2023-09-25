import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../styles/about.module.css';
import '../styles/adaptive.css';
import Card from '../components/Card';

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
		<div className="about__container">
			<div className={styles.cardsList}>
				{cardsContent.map((content) => {
					return <Card text={content.text} title={content.title} />;
				})}
			</div>
		</div>
	);
});

export default about;

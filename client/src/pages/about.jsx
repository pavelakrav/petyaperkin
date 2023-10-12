import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../styles/about.module.css';
import '../styles/adaptive.css';
import Card from '../components/Card';

const about = observer(() => {
	const cardsContent = [
		{
			title: 'Mission',
			text: 'Revolutionize the renewable energy sector by harnessing an untapped energy source',
		},
		{
			title: 'Vision',
			text: 'Capture a significant share of the $1.5 trillion renewable energy market by 2027',
		},
		{
			title: 'Unique Selling Proposition',
			text: 'Transforming Roadside Wind into Sustainable Power with Patented Technology',
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

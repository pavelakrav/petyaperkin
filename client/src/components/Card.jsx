import React from 'react';
import styles from '../styles/card.module.css';

export default function Card({
	title,
	theme = 'dark',
	icon,
	text,
	onClick = (e, title) => {},
}) {
	return (
		<div
			className={`${styles.card} ${
				theme === 'light' ? styles.light : styles.dark
			}`}
		>
			<div className={styles.card__title}>{title}</div>
			<div
				className={styles.card__button}
				onClick={(e) => onClick(e, title)}
			>
				{icon}
			</div>
			{text && <div className={styles.card__text}>{text}</div>}
		</div>
	);
}

import React from 'react';
import { observer } from 'mobx-react-lite';
import FeedbackForm from '../components/FeedbackForm';
import Modal from '../components/Modal';
import styles from '../styles/contacts.module.css';
import { useState } from 'react';

const contacts = observer(() => {
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);
	return (
		<div className={styles.contacts__container}>
			<h1>Contacts:</h1>
			<p className={styles.contacts__text}>
				If you want to contact us here is a{' '}
				{showFeedbackForm ? (
					<Modal
						onClose={() => {
							setShowFeedbackForm(false);
						}}
					>
						<FeedbackForm />
					</Modal>
				) : (
					<span
						className={styles.contacts__text_marked}
						onClick={() => {
							setShowFeedbackForm(true);
						}}
					>
						Feedback Form
					</span>
				)}
			</p>
			<p className={styles.contacts__text}>Google map insert here!</p>
		</div>
	);
});

export default contacts;

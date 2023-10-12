import { useRef } from 'react';
import styles from '../styles/FeedbackForm.module.css';
import emailjs from '@emailjs/browser';
import { Input, Typography, Button, Textarea } from '@material-tailwind/react';
import { useState } from 'react';

export default function FeedbackForm() {
	const form = useRef();

	const [showSuccess, setShowSuccess] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_71vxtsh',
				'template_46os2s9',
				form.current,
				'kCBoNTsQSM7N9f_KA'
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowSuccess(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className={styles.form__container}>
			{showSuccess ? (
				<Typography>Feedback was sent!</Typography>
			) : (
				<>
					<Typography variant="h4" color="blue-gray">
						Feedback Form
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Enter your details.
					</Typography>
					<form
						ref={form}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
						onSubmit={sendEmail}
					>
						<div className="mb-4 flex flex-col gap-6">
							<Input
								size="lg"
								label="Name"
								name="user_name"
								required
							/>
							<Input
								size="lg"
								label="Surname"
								name="user_surname"
								required
							/>
							<Input
								size="lg"
								label="Email"
								name="user_email"
								required
							/>
							<Input
								size="lg"
								label="Company"
								name="user_company"
								required
							/>
							<Textarea label="Message" name="message" />
						</div>

						<Button type="submit" className="mt-6" fullWidth>
							send
						</Button>
					</form>
				</>
			)}
		</div>
	);
}

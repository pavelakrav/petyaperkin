import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Card from '../components/Card';
import '../styles/adaptive.css';
import {
	EVIcon,
	LightBuldIcon,
	QuickIcon,
	TreeIcon,
} from '../components/Icons';

import { sendForm } from '@emailjs/browser';

const keyses = observer(() => {
	const iconSize = 50;
	const CardContent = [
		{
			title: 'Eco friendly',
			icon: <TreeIcon size={iconSize} />,
			text: 'no extra space required',
		},
		{
			title: 'Quick installation',
			icon: <QuickIcon size={iconSize} />,
			text: 'much faster than competitors',
		},
		{
			title: 'Highway illumination',
			icon: <LightBuldIcon size={iconSize} />,
			text: 'enhanced safety',
		},
		{
			title: 'EV charging',
			icon: <EVIcon size={iconSize} />,
			text: 'electricity for remote locations',
		},
	];

	const formRef = useRef();

	const sendEmail = (event) => {
		event.preventDefault();
		console.log('email sent');

		sendForm(
			'service_71vxtsh',
			'template_tcu7bqh',
			formRef.current,
			'kCBoNTsQSM7N9f_KA'
		).then(
			(result) => {
				// show the user a success message
				console.log(result);
			},
			(error) => {
				// show the user an error
				console.log(error);
			}
		);
	};

	return (
		<div className="cardsList">
			{CardContent.map((content) => {
				return <Card {...content} />;
			})}
		</div>
		// <div>
		//     <form ref={formRef} onSubmit={sendEmail}>
		//         <label>email</label>
		//         <input type="text" name="from_name" />
		//         <label>Name</label>
		//         <input type="text" name="to_name" />
		//         <label>Company</label>
		//         <input type="text" />
		//         <label>Message</label>
		//         <textarea name="message"></textarea>
		//         <button type="submit">send</button>
		//     </form>
		// </div>
	);
});

export default keyses;

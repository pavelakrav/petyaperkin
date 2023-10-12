import { useState, useEffect } from 'react';

export const useResize = () => {
	const [width, setWidth] = useState(window.outerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.outerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
	};
};

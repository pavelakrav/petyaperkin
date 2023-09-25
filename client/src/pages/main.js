import React from 'react';
import { observer } from 'mobx-react-lite';
import '../styles/videos.css';
import '../styles/adaptive.css';
import Awingen_Turbine from './Awingen_Turbine.mp4';

const main = observer(() => {
	return (
		<>
			<video
				className="videoTag"
				autoPlay
				muted
				playsInline
				disablePictureInPicture
				loop
			>
				<source
					className="video_Link"
					src={Awingen_Turbine}
					type="video/mp4"
				/>
			</video>
			<div id="fashion">
				<h2>
					<p>AUTONOMOUS</p>WIND GENERATORS
				</h2>
			</div>
		</>
	);
});

export default main;

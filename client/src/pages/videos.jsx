import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import '../styles/downloads.css';
import Modal from '../components/Modal';
import '../styles/videos.css';
import '../styles/adaptive.css';
import playBtn from '../images/play.png';
import '../images/play.svg';
import Awingen_Prewiev from '../images/Awingen_Preview.png';

const videos = observer(() => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickHandler = (event, name) => {
		setIsModalVisible(!isModalVisible);
	};
	const CardContent = [
		{ title: 'Video1' },
		{ title: 'Video2' },
		{ title: 'Video3' },
		{ title: 'Video4' },
	];

	return (
		<>
			<div className="cardsListVideos">
				{CardContent.map((content) => {
					return (
						<>
							<div className="cardVideos">
								<img
									src={Awingen_Prewiev}
									className="smallVideo"
									alt="pic"
								/>
								<a
									className="play_btn"
									onClick={onClickHandler}
								>
									<img
										src={playBtn}
										className="play_btn"
										alt="pic"
									/>
								</a>
							</div>
						</>
					);
				})}
			</div>
			{isModalVisible && (
				<Modal type={'Modal'} onClose={onClickHandler}>
					<div
						className="Video__Wrapper"
						onClick={(event) => {
							event.stopPropagation();
						}}
					></div>
				</Modal>
			)}
		</>
	);
});

export default videos;

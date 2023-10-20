import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
//import '../styles/downloads.css';
import Modal from '../components/Modal';
import styles from '../styles/cardVideos.module.css';
import playBtn from '../images/play.png';
import Awingen_Prewiev from '../images/Awingen_Preview.png';
import Potential from "../images/Potential_Photo.avif";
import Awingen_Trim from "../images/Awingen.mp4"

const cases = observer(() => {
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
			<div className={styles.cardsListVideos}>
				{CardContent.map((content) => {
					return (
						<>
							<div className={styles.cardVideos}>
								<img
									src={Potential}
									className={styles.smallVideo}
									alt="pic"
								/>
								<a
									className={styles.play_btn}
									onClick={onClickHandler}
								>
									<img
										src={playBtn}
										className={styles.play_btn}
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
						className={styles.VideoWrapper}
						onClick={(event) => {
							event.stopPropagation();
						}}
					>
					<video
						className={styles.Modal_Video}
						playsInline
						disablePictureInPicture
						controls
						//autoPlay
						muted
					>
						<source src={Awingen_Trim} type="video/mp4" />
					</video>
					</div>
				</Modal>
			)}
		</>
	);
});

export default cases;

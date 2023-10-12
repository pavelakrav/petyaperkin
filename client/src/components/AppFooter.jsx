import React from 'react';
import styles from '../styles/AppFooter.module.css';

export default function AppFooter() {
	return (
		<div className={styles.AppFooter}>
			<div className={styles.logo}>
				Awingen {new Date().getFullYear()}
			</div>
			<div className={styles.contacts__list}>
				<div className={styles.contacts__list__col}>
					<div className={styles.contacts__list__col__title}>
						Phones:
					</div>
					<p>
						+49 (0) 69 87 00 18 464
						<br />
						+49 (0) 69 87 00 18 465 fax
					</p>
				</div>
				<div className={styles.contacts__list__col}>
					<div className={styles.contacts__list__col__title}>
						Email:
					</div>
					<p>kolesnikovanton049@gmail.com</p>
				</div>
				<div className={styles.contacts__list__col}>
					<div className={styles.contacts__list__col__title}>
						Addresses:
					</div>
					<p>Friedrich-Karl-Klausing Str. 760438 Frankfurt am Main</p>
				</div>
			</div>
		</div>
	);
}

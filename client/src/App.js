import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './styles/main.css';
import './styles/reset.css';
import './styles/adaptive.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
	return (
		<BrowserRouter>
			<div className="AppWrapper">
				<AppHeader />
				<div className="AppContent">
					<AppRouter />
				</div>
				<AppFooter />
			</div>
		</BrowserRouter>
	);
}

export default App;

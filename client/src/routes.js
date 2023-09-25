// import Admin from "./pages/Admin";
import {
	KEYS_ROUTE,
	VIDEOS_ROUTE,
	ABOUT_ROUTE,
	DOWNWLOADS_ROUTE,
	MAIN_ROUTE,
} from './utils/consts';
import main from './pages/main';
import about from './pages/about';
import downloads from './pages/downloads';
import videos from './pages/videos';
import keyses from './pages/keyses';

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: main,
	},
	{
		path: ABOUT_ROUTE,
		Component: about,
	},
	{
		path: DOWNWLOADS_ROUTE,
		Component: downloads,
	},
	{
		path: KEYS_ROUTE,
		Component: keyses,
	},
	{
		path: VIDEOS_ROUTE,
		Component: videos,
	},
];

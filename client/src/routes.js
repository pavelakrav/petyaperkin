// import Admin from "./pages/Admin";
import {
	HOME_ROUTE,
	PATENTS_ROUTE,
	PRODUCT_ROUTE,
	USE_CASES_ROUTE,
	FOR_INVESTORS,
	CONTACTS,
	ABOUT_ROUTE,
} from './utils/consts';
import home from './pages/home';
import about from './pages/about';
import cases from './pages/cases';
import patents from './pages/patents';
import product from './pages/product';
import investors from './pages/investors';
import contacts from './pages/contacts';

export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: home,
	},
	{
		path: ABOUT_ROUTE,
		Component: about,
	},
	{
		path: PATENTS_ROUTE,
		Component: patents,
	},
	{
		path: PRODUCT_ROUTE,
		Component: product,
	},
	{
		path: USE_CASES_ROUTE,
		Component: cases,
	},
	{
		path: FOR_INVESTORS,
		Component: investors,
	},
	{
		path: CONTACTS,
		Component: contacts,
	},
];

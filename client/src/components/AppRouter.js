import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
});

export default AppRouter;

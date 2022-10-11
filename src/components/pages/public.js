import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Yangilanish } from './Yangilanish';
import { Magazin } from './Magazin';
import { Tijorat } from './Tijorat';
import { Yordam } from './Yordam';
import { Kirish } from './Kirish';
import { SinglePage } from './SignlePage';

export const Public = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/yangilanish' element={<Yangilanish />} />
				<Route path='/single/:name' element={<SinglePage />} />
				<Route path='/magazin' element={<Magazin />} />
				<Route path='/tijorat' element={<Tijorat />} />
				<Route path='/yordam' element={<Yordam />} />
				<Route path='/kirish' element={<Kirish />} />
			</Routes>
		</>
	);
};

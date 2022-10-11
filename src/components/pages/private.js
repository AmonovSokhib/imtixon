import { Route, Routes } from 'react-router-dom';
import { Kirish } from './Kirish';

export const Private = () => {
	return (
		<>
			<div className='containerr'>
				<Routes>
					<Route path='/kirish' element={<Kirish />} />
					<Route
						path='*'
						element={
							<h1 className='text-center text-info mt-5'>
								{' '}
								Iltimos kirish tugmasi orqali saytga kiring{' '}
							</h1>
						}
					/>
				</Routes>
			</div>
		</>
	);
};

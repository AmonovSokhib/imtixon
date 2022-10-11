import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './singlepage.scss';

export const SinglePage = () => {
	const { name } = useParams();

	const [narsa, setNarsa] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${name}`)
			.then((res) => res.json())
			.then((data) => setNarsa(data));
	}, [name]);

	return (
		<div className='containerr'>
			{narsa && (
				<>
					<h2 className='mt-5'> Haqida:{narsa.description}</h2>
					<div className='d-flex'>
						<div className='page-img'>
							<img
								width={515}
								height={461}
								src={narsa.image}
								alt={narsa.title}
							/>
						</div>
						<div className='page-about'>
							<h3 className='mb-3'>Price: {narsa.price} $</h3>
							<h4 className='text-primary'>Name: {narsa.title}</h4>
							<h3 className='text-danger'>Katigoriyasi: {narsa.category}</h3>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

import './card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
	return (
		<li className='list__item'>
			<Link to={'/single/' + item.id}>
				<img
					className='mb-3'
					src={item.image}
					width={250}
					height={200}
					alt=''
				/>
				<h4 className='card-title'>{item.title}</h4>
				<p className='card-subtitle'>{item.category}</p>
				<p className='price'>{item.price} $</p>
			</Link>
		</li>
	);
};

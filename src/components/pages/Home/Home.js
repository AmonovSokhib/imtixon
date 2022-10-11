import { useContext, useEffect, useState } from 'react';
import Img from '../../../assets/imgs/allimg.png';
import { langContext } from '../../context/langContext';
import { lang } from '../../lang/lang';
import './home.scss';
import { Card } from '../../Card';
export const Home = () => {
	const { language } = useContext(langContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products`)
			.then((res) => res.json())
			.then((data) => setData(data));
		// .cetch((err) => console.log(err));
	}, []);
	return (
		<div className='containerr'>
			<img className='allimg' src={Img} alt='img' width={1428} />

			<div>
				<div className='section-head d-flex mt-5'>
					<h3 className='yangi'>{lang[language].home.yangi}</h3>
					<h3 className='prog'>{lang[language].home.prog}</h3>
				</div>
				<span className='btn-line1'></span>
				<span className='btn-line'></span>
			</div>
			<div>
				<ul className='list'>
					{data.length && data.map((e) => <Card key={e.id} item={e} />)}
				</ul>
			</div>
		</div>
	);
};

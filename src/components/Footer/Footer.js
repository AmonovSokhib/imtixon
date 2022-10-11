import FooterLogo from '../../assets/imgs/footer.svg';
import App from '../../assets/imgs/AppStore.png';
import Android from '../../assets/imgs/Android.png';
import { Link } from 'react-router-dom';
import { lang } from '../lang/lang';
import { langContext } from '../context/langContext';
import { useContext } from 'react';
import './footer.scss';

export const Footer = () => {
	const { language } = useContext(langContext);
	return (
		<div className='footer'>
			<div className='containerr'>
				<div className='d-flex'>
					<div className='d-flex align-items-center'>
						<Link to='/'>
							<img src={FooterLogo} alt='Logo' width={67} height={67} />
						</Link>
						<strong className='proday text-white'>
							{lang[language].header.Logo}
						</strong>
					</div>
					<div>
						<img className='me-3' src={App} alt='appstroge' />
						<img src={Android} alt='android' />
					</div>
				</div>
			</div>
		</div>
	);
};

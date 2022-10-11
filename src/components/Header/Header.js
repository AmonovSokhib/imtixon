import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/Kivi-Logo.svg';
import './header.scss';
import { lang } from '../lang/lang';
import { langContext } from '../context/langContext';
import { Head } from '../Head/Head';

export const Header = () => {
	const { language, setLang } = useContext(langContext);

	return (
		<header className='header'>
			<div className='containerr'>
				<div className='wrapper'>
					<div className='d-flex align-items-center'>
						<Link to='/'>
							<img src={Logo} alt='Logo' width={67} height={67} />
						</Link>
						<strong className='proday'>{lang[language].header.Logo}</strong>
					</div>

					<nav>
						<ul className='nav-list'>
							<li className='list-item'>
								<Link className='item-link' to='/yangilanish'>
									{lang[language].header.Yangilanish}
								</Link>
							</li>
							<li className='list-item'>
								<Link className='item-link' to='/magazin'>
									{lang[language].header.Magazin}
								</Link>
							</li>
							<li className='list-item'>
								<Link className='item-link' to='/tijorat'>
									{lang[language].header.Tijorat}
								</Link>
							</li>
							<li className='list-item'>
								<Link className='item-link' to='/yordam'>
									{lang[language].header.Yordam}
								</Link>
							</li>
						</ul>
					</nav>

					<form
						defaultValue={language}
						className='d-flex align-items-center'
						onChange={(evt) => {
							setLang(evt.target.value);
						}}>
						<input type='checkbox' id='name' value='ru' />
						<label htmlFor='name'>Рус</label>
						<span className='mx-2'>|</span>
						<input type='checkbox' id='name1' value='uz' />
						<label htmlFor='name1'>O’z</label>
					</form>

					<ul className='d-flex kirish__page '>
						<li>
							<Link className='link-kirish ' to='/kirish'>
								{lang[language].header.Kirish}
							</Link>
						</li>
						<span className='mx-2'>|</span>
						<li>
							<Link className='link-kirish bxod' to='/kirish'>
								{lang[language].header.Royxat}
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<Head />
		</header>
	);
};

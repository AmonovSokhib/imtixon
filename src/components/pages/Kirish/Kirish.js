import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { lang } from '../../lang/lang';
import { langContext } from '../../context/langContext';
import axios from 'axios';
import './kirish.scss';
import Kivi from '../../../assets/imgs/kivi.png';

export const Kirish = () => {
	const { language } = useContext(langContext);
	const elEmail = useRef();
	const elPassword = useRef();
	const navigate = useNavigate();
	const { setToken } = useContext(AuthContext);

	const handleForm = (evt) => {
		evt.preventDefault();

		axios
			.post('https://reqres.in/api/login', {
				email:
					elEmail.current.value === 'eve.holt@reqres.in'
						? elEmail.current.value
						: alert(`Siz noto'g'ri email yoki parol kiritdingiz 
						email: eve.holt@reqres.in
						parolni farqi yo'q`) && console.log('eve.holt@reqres.in'),

				password: elPassword.current.value,
			})
			.then((response) => {
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='containerr'>
			<div className='d-flex justify-content-between'>
				<div className='kirish-page'>
					<h3 className='kirish-page__title'>
						{lang[language].kirish.registir}
					</h3>
					<p className='kirish-page__subtitle'>{lang[language].kirish.sms}</p>

					<form onSubmit={handleForm} className='kirish-form'>
						<label className='mx-auto mb-5'>
							<p className='telefon-raqam'>{lang[language].kirish.raqam}</p>
							<input
								className='form-control input-value '
								ref={elEmail}
								type='email'
								placeholder='Email...'
							/>
						</label>
						<label className='mx-auto'>
							<p className='telefon-raqam'>{lang[language].kirish.parol}</p>
							<input
								className='form-control input-value'
								ref={elPassword}
								type='password'
								placeholder='Password...'
							/>
						</label>
						<button className='button' type='submit'>
							{lang[language].kirish.send}
						</button>
					</form>
				</div>
				<div className='kirish-img'>
					<img className='kivi-rek' src={Kivi} alt='kivi reklamasi' />
				</div>
			</div>
		</div>
	);
};

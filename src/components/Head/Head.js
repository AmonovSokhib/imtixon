import './head.scss';
import { lang } from '../lang/lang';
import { langContext } from '../context/langContext';
import { useContext } from 'react';
export const Head = () => {
	const { language } = useContext(langContext);
	return (
		<div className='head'>
			<div className='containerr'>
				<div className='d-flex justify-content-between'>
					<div className='head-sellect'>
						<select className='sellect1'>
							<option value={1}>{lang[language].head.kat}</option>
						</select>
						<p className='center'>{lang[language].head.qidir}</p>
						<select className='sellect2'>
							<option value={2}>{lang[language].head.uzb}</option>
						</select>
					</div>
					<div className='head-yangi'>{lang[language].head.search}</div>
				</div>
			</div>
		</div>
	);
};

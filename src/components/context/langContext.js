import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const langContext = createContext();

export const LangProvider = ({ children }) => {
	const localData = window.localStorage.getItem('language');
	const [language, setLang] = useState(localData || 'ru');
	useEffect(() => {
		window.localStorage.setItem('language', language);
	}, [language]);
	return (
		<langContext.Provider value={{ language, setLang }}>
			{children}
		</langContext.Provider>
	);
};

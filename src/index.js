import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from './components/context/langContext';
import { AuthProvider } from './components/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<LangProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</LangProvider>
	</BrowserRouter>,
);

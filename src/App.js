import './App.scss';
import { Header } from './components';
import { useAuth } from './hook/useAuth';
import { Public } from './components/pages/public';
import { Private } from './components/pages/private';
import { Footer } from './components';
function App() {
	const { token } = useAuth();

	return (
		<div className='App'>
			<Header />
			{token ? <Public /> : <Private />}
			<Footer />
		</div>
	);
}

export default App;

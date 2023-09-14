import { Header } from './components/Header';
import Home from './components/Home';
import Bottom from './components/Bottom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import PasswordProtect from './components/PasswordProtect';
import Admin from './components/Admin';

const App = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<Home id="home" />
			<PasswordProtect>
				<Main />
			</PasswordProtect>
			<Admin/>
			<Bottom />
		</div>
	);
}

export default App;

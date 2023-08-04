import { Header } from './components/Header';
import Home from './components/Home';
import Bottom from './components/Bottom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import PasswordProtect from './components/PasswordProtect';

function App() {
	return (
		<div>
			<Header />
			<Navbar />
			<Home id="home" />
			<PasswordProtect>
				<Main />
			</PasswordProtect>
			<Bottom />
		</div>
	);
}

export default App;

import { Header } from './components/Header';
import Home from './components/Home';
import Bottom from './components/Bottom';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
	return (
		<div>
			<Header />
			<Navbar />
			<Home id="home" />
			<Main/>
			<Bottom />
		</div>
	);
}

export default App;

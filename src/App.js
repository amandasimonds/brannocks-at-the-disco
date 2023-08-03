import { Header } from './components/Header';
import Home from './components/Home';
import OurWedding from './components/OurWedding';
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
			{/* <OurWedding id="our-wedding" /> */}
			<Bottom />
		</div>
	);
}

export default App;

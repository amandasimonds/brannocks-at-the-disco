import { Header } from './components/Header';
import Home from './components/Home';
import OurWedding from './components/OurWedding';
import Bottom from './components/Bottom';

function App() {
	return (
		<div>
			<Header />
			<Home id="home" />
			<OurWedding id="our-wedding"/>
			<Bottom />
		</div>
	);
}

export default App;

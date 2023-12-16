import { Header } from './Header';
import Hero from './Hero';
import Bottom from './Bottom';
import Navbar from './Navbar';
import Main from './Main';
import PasswordProtect from '../PasswordProtect';

const MainPage = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<Hero id="home" />
			<PasswordProtect>
				<Main />
			</PasswordProtect>
			<Bottom />
		</div>
	);
};

export default MainPage;

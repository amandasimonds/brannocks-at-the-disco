import React from 'react';
import { BrowserRouter,
	Routes,
	Route} from 'react-router-dom';
import Admin from './components/Admin';
import MainPage from './components/Layout/MainPage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>} />
				<Route path="/admin" element={<Admin/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

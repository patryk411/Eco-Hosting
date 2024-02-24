import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Help from './pages/Help';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './assets/sass/App.scss';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgetPass from './pages/ForgetPass';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/packages' element={<Packages />} />
					<Route path='/help' element={<Help />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/forget-password' element={<ForgetPass />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

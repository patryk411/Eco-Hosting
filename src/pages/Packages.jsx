import React from 'react';
import Navigation from '../components/Navigation';
import Plan from '../components/Plan';
import About from '../components/About';
import Footer from '../components/Footer';
import ScrollToggler from '../components/ScrollToggler';

export default function Packages() {
	return (
		<div>
			<Navigation />
			<main className='main'>
				<Plan />
				<About />
			</main>
			<Footer />
			<ScrollToggler />
		</div>
	);
}

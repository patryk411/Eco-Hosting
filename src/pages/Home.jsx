import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Search from '../components/Search';
import Features from '../components/Features';
import Plan from '../components/Plan';
import About from '../components/About';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ScrollToggler from '../components/ScrollToggler';

export default function Home() {
	return (
		<div>
			<Navigation />
			<Header />
			<Search />
			<main className='main'>
				<Features />
				<Plan />
				<About />
				<Faq />
			</main>
			<Footer />
			<ScrollToggler />
		</div>
	);
}

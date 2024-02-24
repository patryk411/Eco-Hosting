import React from 'react';
import Navigation from '../components/Navigation';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ScrollToggler from '../components/ScrollToggler';
import HeaderSubpage from '../components/HeaderSubpage';

export default function Help({ title }) {
	return (
		<div>
			<Navigation />
			<HeaderSubpage title='Help center' />
			<main className='main'>
				<Faq />
			</main>
			<Footer />
			<ScrollToggler />
		</div>
	);
}

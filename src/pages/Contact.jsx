import React from 'react';
import Navigation from '../components/Navigation';
import ScrollToggler from '../components/ScrollToggler';
import HeaderSubpage from '../components/HeaderSubpage';
import Footer from '../components/Footer';
import ContactSubpage from '../components/ContactSubpage';

export default function Contact({ title }) {
	return (
		<div>
			<Navigation />
			<HeaderSubpage title='Contact us' />
			<ContactSubpage />
			<Footer />
			<ScrollToggler />
		</div>
	);
}

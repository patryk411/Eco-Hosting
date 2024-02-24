import React from 'react';
import Navigation from '../components/Navigation';
import ScrollToggler from '../components/ScrollToggler';
import HeaderSubpage from '../components/HeaderSubpage';
import Footer from '../components/Footer';
import BlogSubpage from '../components/BlogSubpage';

export default function Blog({ title }) {
	return (
		<div>
			<Navigation />
			<HeaderSubpage title='Blog' />
			<BlogSubpage />
			<ScrollToggler />
			<Footer />
		</div>
	);
}

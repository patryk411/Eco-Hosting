import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSite from '../assets/img/logo.png';
import imgShape from '../assets/img/top-left-shape.png';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Packages', href: '/packages', current: false },
	{ name: 'Help', href: '/help', current: false },
	{ name: 'Blog', href: '/blog', current: false },
	{ name: 'Contact', href: '/contact', current: false },
	{ name: 'Sign up', href: '/sign-up', current: false },
	{ name: 'Sign in', href: '/sign-in', current: false },
];

const logoNav = [{ href: '/', current: false }];

export default function Navigation() {
	return (
		<Navbar id='nav' expand='lg'>
			{logoNav.map((item, index) => (
				<Navbar.Brand
					key={index}
					href={item.href}
					className='navbar-brand'
					aria-current={item.current ? 'page' : undefined}>
					<img src={logoSite} alt='' />
				</Navbar.Brand>
			))}
			<Navbar.Toggle>
				<i className='fa-solid fa-bars'></i>
			</Navbar.Toggle>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ms-auto'>
					{navigation.map((item, index) => (
						<Nav.Link
							key={index}
							name={item.name}
							href={item.href}
							className={item.name === 'Sign up' ? 'nav-button' : 'nav-link'}
							aria-current={item.current ? 'page' : undefined}>
							{item.name}
						</Nav.Link>
					))}
				</Nav>
			</Navbar.Collapse>
			<img src={imgShape} className='shape-img' alt='' />
		</Navbar>
	);
}

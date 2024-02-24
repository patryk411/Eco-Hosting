import React from 'react';
import { Container } from 'react-bootstrap';
import imgRight from '../assets/img/hero_right.png';
import imgShape from '../assets/img/top-left-shape.png';

export default function Header() {
	return (
		<header className='header'>
			<Container>
				<div className='header__content'>
					<div className='header__text col-md-9 col-lg-5'>
						<p className='header--subheading'>Best Domain & hosting service provider</p>
						<h1 className='header--heading'>Powerful web hosting</h1>
						<h3 className='header--text'>
							Supercharge your WordPress hosting with detailed website analytics, marketing tools, security, and data
							backups all in one place.
						</h3>
						<a href='#' className='header--btn'>
							get started
						</a>
					</div>
					<img className='header__img col-lg-6 d-none d-lg-block d-none d-xl-block' src={imgRight} alt='' />
				</div>
			</Container>
		</header>
	);
}

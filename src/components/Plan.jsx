import { useLocation } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import price1 from '../assets/img/price1.svg';
import price2 from '../assets/img/price2.svg';
import price3 from '../assets/img/price3.svg';

export default function Plan() {
	const location = useLocation();
	const isPackagesPage = location.pathname.includes('packages');

	return (
		<section className='main__plan mb-0'>
			<Container>
				<div className=''>
					<div
						className={`main__plan__text d-flex flex-column justify-content-center align-items-center ${
							isPackagesPage ? 'main__plan__packages' : ''
						}`}>
						<h2 className='section-heading col-lg-9 col-xl-7'>Choose plan which fit for you</h2>
						<p className={`section-text col-lg-9 col-xl-7 ${isPackagesPage ? 'section-text-subpage' : ''}`}>
							Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just
							part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
						</p>
					</div>
					<div className='main__plan__content row m-0 p-0'>
						<div className='main__plan__content__box col-md-5 col-lg-4 col-xl'>
							<div className='main__plan__content__box--top'>
								<img src={price1} alt='' />
								<h3 className='main__plan__content__box--title'>shared hosting</h3>
								<p className='main__plan__content__box--subtitle'>Starting at</p>
								<p className='main__plan__content__box--text'>
									<span className='main__plan__content__box--price'>$4.67</span> / month
								</p>
							</div>
							<ul className='main__plan__content__box__list'>
								<li>2 TB of space</li>
								<li>unlimited bandwidth</li>
								<li>full backup systems</li>
								<li>free domain</li>
								<li>unlimited database</li>
							</ul>
							<div className='box-buttons'>
								<a href='' className='main-btn'>
									get started
								</a>
							</div>
						</div>
						<div className='main__plan__content__box col-md-5 col-lg-4 col-xl'>
							<div className='main__plan__content__box--top'>
								<img src={price2} alt='' />
								<h3 className='main__plan__content__box--title'>shared hosting</h3>
								<p className='main__plan__content__box--subtitle'>Starting at</p>
								<p className='main__plan__content__box--text'>
									<span className='main__plan__content__box--price'>$4.67</span> / month
								</p>
							</div>
							<ul className='main__plan__content__box__list'>
								<li>2 TB of space</li>
								<li>unlimited bandwidth</li>
								<li>full backup systems</li>
								<li>free domain</li>
								<li>unlimited database</li>
							</ul>
							<div className='box-buttons'>
								<a href='' className='main-btn'>
									get started
								</a>
							</div>
						</div>
						<div className='main__plan__content__box col-md-5 col-lg-4 col-xl'>
							<div className='main__plan__content__box--top'>
								<img src={price3} alt='' />
								<h3 className='main__plan__content__box--title'>shared hosting</h3>
								<p className='main__plan__content__box--subtitle'>Starting at</p>
								<p className='main__plan__content__box--text'>
									<span className='main__plan__content__box--price'>$4.67</span> / month
								</p>
							</div>
							<ul className='main__plan__content__box__list'>
								<li>2 TB of space</li>
								<li>unlimited bandwidth</li>
								<li>full backup systems</li>
								<li>free domain</li>
								<li>unlimited database</li>
							</ul>
							<div className='box-buttons'>
								<a href='' className='main-btn'>
									get started
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className='main__plan__bg'></div>
		</section>
	);
}

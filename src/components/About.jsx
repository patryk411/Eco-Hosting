import React from 'react';
import { Container } from 'react-bootstrap';
import about1 from '../assets/img/about1.png';
import about2 from '../assets/img/about2.png';
import liImg from '../assets/img/right.svg';

export default function About() {
	return (
		<section className='main__about'>
			<Container>
				<div className='main__about__content'>
					<div className='main__about__content__box'>
						<div className='main__about__img col-lg-5'>
							<img src={about1} className='w-100' alt='' />
						</div>
						<div className='main__about__text col-lg-6'>
							<h2 className='main__about__text--heading'>Global server location</h2>
							<p className='main__about__text--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are
								just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you
								succeed!
							</p>
							<ul className='main__about__text__list'>
								<li className='main__about__text__list--li'>
									<span className='main__about__text__list--img'>
										<img src={liImg} alt='' />
									</span>
									WordPress hosting with detailed website
								</li>
								<li className='main__about__text__list--li'>
									<span className='main__about__text__list--img'>
										<img src={liImg} alt='' />
									</span>
									Our experts are just part of the reason
								</li>
								<li className='main__about__text__list--li'>
									<span className='main__about__text__list--img'>
										<img src={liImg} alt='' />
									</span>
									Detailed website analytics
								</li>
							</ul>
						</div>
					</div>
					<div className='main__about__content__box'>
						<div className='main__about__img col-lg-5 even-img'>
							<img src={about2} className='w-100' alt='' />
						</div>
						<div className='main__about__text col-lg-6 even-content'>
							<h2 className='main__about__text--heading'>Dedicated support</h2>
							<p className='main__about__text--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are
								just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you
								succeed!
							</p>
							<ul className='main__about__text__list'>
								<li className='main__about__text__list--li'>
									<span className='main__about__text__list--img'>
										<img src={liImg} alt='' />
									</span>
									WordPress hosting with detailed website
								</li>
								<li className='main__about__text__list--li'>
									<span className='main__about__text__list--img'>
										<img src={liImg} alt='' />
									</span>
									Our experts are just part of the reason
								</li>
							</ul>
							<div className='main__about__btn'>
								<a href='' className='btn'>
									<i className='fa-solid fa-phone'></i> (10) 892-293 2678
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

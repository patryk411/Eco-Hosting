import { useLocation } from 'react-router-dom';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import testimonial1 from '../assets/img/testimonial.png';

export default function Faq() {
	const location = useLocation();
	const isFaqPage = location.pathname.includes('help');

	return (
		<section className={`main__faqs ${isFaqPage ? 'main__help' : ''}`}>
			<Container>
				<div className='main__faqs__text'>
					<h2 className={`section-heading col-md-11 col-lg-9 ${isFaqPage ? 'section-heading-subpage' : ''}`}>
						Frequently ask questions
					</h2>
					<p className={`section-text col-md-11 col-lg-7 ${isFaqPage ? 'section-text-help' : ''}`}>
						Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just
						part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
					</p>
				</div>
				<div className='main__faqs__content'>
					<div className='main__faqs__content__questions row m-0 p-0'>
						<div className='main__faqs__content__questions__box col-md-6 col-lg-6'>
							<p
								className={`main__faqs__content__questions__box--q ${
									isFaqPage ? 'main__faqs__content__questions__box--qH' : ''
								}`}>
								Q.
							</p>
							<div className='main__faqs__content__questions__box__text'>
								<h3
									className={`main__faqs__content__questions__box__text--title ${
										isFaqPage ? 'main__faqs__content__questions__box__text--titleH' : ''
									}`}>
									Why can't people connect to the web server on my PC?
								</h3>
								<p
									className={`main__faqs__content__questions__box__text--text ${
										isFaqPage ? 'main__faqs__content__questions__box__text--textH' : ''
									}`}>
									We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and
									extensive DDoS protection.
								</p>
							</div>
						</div>
						<div className='main__faqs__content__questions__box col-md-6 col-lg-6'>
							<p
								className={`main__faqs__content__questions__box--q ${
									isFaqPage ? 'main__faqs__content__questions__box--qH' : ''
								}`}>
								Q.
							</p>
							<div className='main__faqs__content__questions__box__text'>
								<h3
									className={`main__faqs__content__questions__box__text--title ${
										isFaqPage ? 'main__faqs__content__questions__box__text--titleH' : ''
									}`}>
									What domain name should I choose for my site?
								</h3>
								<p
									className={`main__faqs__content__questions__box__text--text ${
										isFaqPage ? 'main__faqs__content__questions__box__text--textH' : ''
									}`}>
									We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and
									extensive DDoS protection.
								</p>
							</div>
						</div>
						<div className='main__faqs__content__questions__box col-md-6 col-lg-6'>
							<p
								className={`main__faqs__content__questions__box--q ${
									isFaqPage ? 'main__faqs__content__questions__box--qH' : ''
								}`}>
								Q.
							</p>
							<div className='main__faqs__content__questions__box__text'>
								<h3
									className={`main__faqs__content__questions__box__text--title ${
										isFaqPage ? 'main__faqs__content__questions__box__text--titleH' : ''
									}`}>
									How can I make my website work without www. in front?
								</h3>
								<p
									className={`main__faqs__content__questions__box__text--text ${
										isFaqPage ? 'main__faqs__content__questions__box__text--textH' : ''
									}`}>
									We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and
									extensive DDoS protection.
								</p>
							</div>
						</div>
						<div className='main__faqs__content__questions__box col-md-6 col-lg-6'>
							<p
								className={`main__faqs__content__questions__box--q ${
									isFaqPage ? 'main__faqs__content__questions__box--qH' : ''
								}`}>
								Q.
							</p>{' '}
							<div className='main__faqs__content__questions__box__text'>
								<h3
									className={`main__faqs__content__questions__box__text--title ${
										isFaqPage ? 'main__faqs__content__questions__box__text--titleH' : ''
									}`}>
									Why does Internet Information Server want a password?
								</h3>
								<p
									className={`main__faqs__content__questions__box__text--text ${
										isFaqPage ? 'main__faqs__content__questions__box__text--textH' : ''
									}`}>
									We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and
									extensive DDoS protection.
								</p>
							</div>
						</div>
					</div>
					<div className='main__faqs__button'>
						<a href='' className='btn'>
							go to support
						</a>
					</div>
					<div
						className={`main__faqs__content__testimonitals col-md-12 col-lg-9 ${
							isFaqPage ? 'main__faqs__content__testimonitalsH' : ''
						}`}>
						<Carousel>
							<Carousel.Item>
								<Carousel.Caption>
									<p>
										Brook presents your services with flexible, convenient and cdpose layouts. You can select your
										favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect
										replica;ition of thei designers ijtls intended csents your se.
									</p>
									<div className='carousel-author'>
										<img src={testimonial1} alt='' />
										<div className='author-info'>
											<h4 className='author-name'>Jacson Miller</h4>
											<h5 className='author-position'>Designer @Colorib</h5>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Carousel.Caption>
									<p>
										Brook presents your services with flexible, convenient and cdpose layouts. You can select your
										favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect
										replica;ition of thei designers ijtls intended csents your se.
									</p>
									<div className='carousel-author'>
										<img src={testimonial1} alt='' />
										<div className='author-info'>
											<h4 className='author-name'>Jacson Miller</h4>
											<h5 className='author-position'>Designer @Colorib</h5>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Carousel.Caption>
									<p>
										Brook presents your services with flexible, convenient and cdpose layouts. You can select your
										favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect
										replica;ition of thei designers ijtls intended csents your se.
									</p>
									<div className='carousel-author'>
										<img src={testimonial1} alt='' />
										<div className='author-info'>
											<h4 className='author-name'>Jacson Miller</h4>
											<h5 className='author-position'>Designer @Colorib</h5>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</Container>
		</section>
	);
}

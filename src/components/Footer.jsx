import React from 'react';
import { Container } from 'react-bootstrap';
import footerImg from '../assets/img/logo.png';
import footerShape from '../assets/img/top-left-shape.png';

const logoNav = [{ href: '/', current: false }];

export default function Footer() {
	return (
		<footer>
			<Container>
				<div className='content'>
					<div className='content__main row m-0 p-0'>
						<div className='content__main__box col-md-6 col-lg-4 col-xl-3'>
							<div className='content__main__footer-logo'>
								{logoNav.map((item, index) => (
									<a
										key={index}
										href={item.href}
										className='navbar-brand'
										aria-current={item.current ? 'page' : undefined}>
										<img src={footerImg} alt='' />
									</a>
								))}
							</div>
							<p className='content__main__box--text'>Subscribe our newsletter to get updates about our services</p>
							<div className='content__main__box__btns'>
								<input type='text' className='content__main__box__btns--input' placeholder='Email address' />
								<div className='content__main__box__btns__subscribe'>
									<a href='' className='btn content__main__box__btns__subscribe--subscribe'>
										Subscribe
									</a>
								</div>
							</div>
							<div className='content__main__box__socials'>
								<a href='' className='content__main__box__socials--box'>
									<i className='fa-brands fa-twitter'></i>
								</a>
								<a href='' className='content__main__box__socials--box'>
									<i className='fa-brands fa-facebook-f'></i>
								</a>
								<a href='' className='content__main__box__socials--box'>
									<i className='fa-brands fa-pinterest-p'></i>
								</a>
							</div>
						</div>
						<div className='col-md-1 col-xl-1'></div>
						<div className='content__main__box col-md-4 col-lg-2 col-xl-2'>
							<h3 className='content__main__box--heading'>Company</h3>
							<ul className='content__main__box__list'>
								<li className='content__main__box__list--item'>
									<a href=''> Why choose us</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Review</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Customers</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Blog</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Carrier</a>
								</li>
							</ul>
						</div>
						<div className='content__main__box col-md-4 col-lg-2 col-xl-2'>
							<h3 className='content__main__box--heading'>Products</h3>
							<ul className='content__main__box__list'>
								<li className='content__main__box__list--item'>
									<a href=''> Why choose us</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Review</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Customers</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Blog</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Carrier</a>
								</li>
							</ul>
						</div>
						<div className='content__main__box col-md-4 col-lg-2 col-xl-2'>
							<h3 className='content__main__box--heading'>Support</h3>
							<ul className='content__main__box__list'>
								<li className='content__main__box__list--item'>
									<a href=''> Technology</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Products</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Customers</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Quality</a>
								</li>
								<li className='content__main__box__list--item'>
									<a href=''> Sales geography</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='content__btm'>
						<p className='content__btm--text'>
							Copyright ©2024 All rights reserved | This template is made with <i className='fa-solid fa-heart'></i> by
							Colorlib
						</p>
					</div>
				</div>
			</Container>
			<div className='shape'></div>
		</footer>
	);
}

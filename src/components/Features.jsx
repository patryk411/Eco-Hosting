import React from 'react';
import { Container } from 'react-bootstrap';
import service1 from '../assets/img/services1.svg';
import service2 from '../assets/img/services2.svg';
import service3 from '../assets/img/services3.svg';
import service4 from '../assets/img/services4.svg';
import service5 from '../assets/img/services5.svg';
import service6 from '../assets/img/services6.svg';

export default function Features() {
	return (
		<section className='main__features'>
			<Container>
				<div className='main__features__text'>
					<h2 className='section-heading'>Most amazing features</h2>
				</div>
				<div className='main__features__content'>
					<div className='row'>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service1} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>Employee Owned</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service2} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>Commitment To Security</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service3} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>Passion For Privacy</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service4} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>Employee Owned</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service5} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>24/7 Support</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
						<div className='main__features__content__box col-md-4 col-lg-4'>
							<div className='main__features__content__box--box'>
								<img src={service6} alt='' />
							</div>
							<h5 className='main__features__content__box--title'>100% Uptime Guaranteed</h5>
							<p className='main__features__content__box--text'>
								Supercharge your WordPress hosting with detailed website analytics, marketing tools.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

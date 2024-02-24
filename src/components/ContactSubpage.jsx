import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function ContactSubpage() {
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);

	const email = useRef();

	function handleSubmit(event) {
		event.preventDefault();

		const enteredEmail = email.current.value;

		const emailIsValid = !enteredEmail.includes('@');

		if (!emailIsValid) {
			setEmailIsInvalid(true);
			return;
		}

		setEmailIsInvalid(false);
		console.log('http req');
	}

	return (
		<section className='contact'>
			<Container>
				<div className='contact__content'>
					<div className='contact__map col-12'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2211.311261252895!2d-2.7968423230810866!3d56.341713573307935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886579b5f3ecb03%3A0x2d5491cd7f05a123!2sUniversity%20of%20St%20Andrews!5e0!3m2!1spl!2spl!4v1708621220780!5m2!1spl!2spl'
							width='600'
							height='450'
							loading='lazy'></iframe>
					</div>
					<div className='contact__form'>
						<h3 className='contact__form--heading'>Get in Touch</h3>
						<div className='contact__form__boxes'>
							<div className='contact__form__contact-form col-md-12 col-lg-8'>
								<Form onSubmit={handleSubmit}>
									<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
										<Form.Control placeholder='Enter Message' as='textarea' rows={3} />
									</Form.Group>
									<div className='row'>
										<Form.Group className='col-sm-12 col-md-6 col-lg-6' controlId='exampleForm.ControlInput1'>
											<Form.Control type='name' placeholder='Enter your name' />
										</Form.Group>
										<Form.Group className='col-sm-12 col-md-6 col-lg-6' controlId='exampleForm.ControlInput2'>
											<input className='form-control' type='email' placeholder='Email' ref={email} />
										</Form.Group>
									</div>
									<Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
										<Form.Control type='text' placeholder='Enter Subject' />
									</Form.Group>

									<div className='form-btn'>
										<a href='' className='btn'>
											send
										</a>
									</div>
								</Form>
							</div>
							<div className='contact__form__info col-md-12 col-lg-4'>
								<div className=''>
									<div className='contact__form__info__box'>
										<i className='fa-solid fa-house'></i>
										<div className='contact__form__info__text'>
											<h5 className='contact__form__info__text--title'>Buttonwood, California.</h5>
											<p className='contact__form__info__text--text'>Rosemead, CA 91770</p>
										</div>
									</div>
									<div className='contact__form__info__box'>
										<i className='fa-solid fa-tablet-screen-button'></i>{' '}
										<div className='contact__form__info__text'>
											<h5 className='contact__form__info__text--title'>+1 253 565 2365</h5>
											<p className='contact__form__info__text--text'>Mon to Fri 9am to 6pm</p>
										</div>
									</div>
									<div className='contact__form__info__box'>
										<i className='fa-regular fa-envelope'></i>{' '}
										<div className='contact__form__info__text'>
											<h5 className='contact__form__info__text--title'>support@colorlib.com</h5>
											<p className='contact__form__info__text--text'>Send us your query anytime!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

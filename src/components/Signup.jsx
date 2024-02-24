import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Input from './Input';
import { Link } from 'react-router-dom';

export default function Signup() {
	const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const acquistitionChannel = fd.getAll('acquistition');
		const data = Object.fromEntries(fd.entries());
		data.acquistition = acquistitionChannel;

		if (data.password !== data['password-confirm']) {
			setPasswordsAreNotEqual(true);
			return;
		} else {
			setPasswordsAreNotEqual(false);
		}

		fetch('http://localhost:3000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				order: {
					userData: data,
				},
			}),
		});
		console.log(data);
	}

	return (
		<div className='signup'>
			<Container>
				<div className='signup__content'>
					<form onSubmit={handleSubmit} className='col-md-8 col-lg-5'>
						<h2>Registration Here</h2>

						<Input label='Full name' id='full-name' type='text' name='name' />

						<Input label='Email Address' id='email' type='email' name='email' />

						<Input label='Password' id='password' type='password' name='password' minLength={6} />

						<Input label='Confirm Password' id='password-confirm' type='password' name='password-confirm' />
						<div className='control-error'>{passwordsAreNotEqual && <p>pass must be match</p>}</div>

						<div className='form-action'>
							<button type='submit' className='btn btn-submit'>
								Registration
							</button>
						</div>
						<Link className='login-btn' to='/sign-in'>
							Login
						</Link>
					</form>
				</div>
			</Container>
		</div>
	);
}

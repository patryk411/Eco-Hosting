import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Input from './Input';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
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
						<h2>Reset Your Password Here</h2>

						<Input label='New Password' id='full-name' type='text' name='name' />

						<Input label='Confirm New Password' id='email' type='email' name='email' />

						<div className='control-error'>{passwordsAreNotEqual && <p>pass must be match</p>}</div>

						<div className='form-action'>
							<button type='submit' className='btn btn-submit'>
								Reset
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

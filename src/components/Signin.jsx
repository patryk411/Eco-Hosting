import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Input from './Input';
import { Link } from 'react-router-dom';

const forgetPass = [{ name: 'Forget Password', href: '/forget-password', current: false }];

export default function Signin() {
	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const acquistitionChannel = fd.getAll('acquistition');
		const data = Object.fromEntries(fd.entries());
		data.acquistition = acquistitionChannel;

		fetch('http://localhost:3000/logins', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				order: {
					loginData: data,
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
						<h2>Login Here</h2>

						<Input label='Email Address' id='emailLogin' type='email' name='emailLogin' />

						<Input label='Password' id='passwordLogin' type='password' name='passwordLogin' minLength={6} />

						<div className='form-action'>
							<button type='submit' className='btn btn-submit'>
								Login
							</button>
						</div>
						<div className='row'>
							{forgetPass.map((item, index) => (
								<a
									key={index}
									name={item.name}
									href={item.href}
									className='login-btn'
									aria-current={item.current ? 'page' : undefined}>
									{item.name}
								</a>
							))}
							<Link className='login-btn' to='/sign-up'>
								Registration
							</Link>
						</div>
					</form>
				</div>
			</Container>
		</div>
	);
}

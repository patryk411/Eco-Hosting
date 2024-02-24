import Form from 'react-bootstrap/Form';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Search() {
	return (
		<div className='search'>
			<Container>
				<div className='search__content'>
					<div className='search__text col-lg-4'>
						<h4 className='search__text--heading'>Search new domain</h4>
						<p className='search__text--text'>
							Supercharge your WordPress hosting with detailed website analytics, marketing tools.
						</p>
					</div>
					<div className='search__input col-md-6 col-lg-7'>
						<Form>
							<Form.Group controlId='exampleForm.ControlInput1'>
								<Form.Control type='email' placeholder='Search form a domain' />
								<div className='icon-globe'>
									<i className='fa-solid fa-globe'></i>
								</div>
								<a href='#' className='icon-search'>
									<i className='fa-solid fa-magnifying-glass'></i>
								</a>
							</Form.Group>
						</Form>
						<ul className='search__domains'>
							<li className='search__domains--domain'>
								<span className='domain-com'>.com</span>
								<span className='domain-price'>$15.99</span>
							</li>
							<li className='search__domains--domain'>
								<span className='domain-net'>.net</span>
								<span className='domain-price'>$10.99</span>
							</li>
							<li className='search__domains--domain'>
								<span className='domain-rog'>.rog</span>
								<span className='domain-price'>$10.99</span>
							</li>
							<li className='search__domains--domain'>
								<span className='domain-me'>.me</span>
								<span className='domain-price'>$10.99</span>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
}

import React from 'react';
import { Container } from 'react-bootstrap';
import erorrImg from '../assets/img/about2.png';

export default function BlogSubpage() {
	return (
		<div className='blogsubpage'>
			<Container>
				<div className='blogsubpage__content'>
					<div className='blogsubpage__text'>
						<h3 className='blogsubpage--error'>Blog will be comming soon... </h3>
						<p className='blogsubpage--text'>We're apologize for the technical problems</p>
					</div>
				</div>
			</Container>
		</div>
	);
}

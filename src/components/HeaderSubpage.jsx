import React from 'react';

export default function HeaderSubpage({ title }) {
	return (
		<header className='header-subpage'>
			<div>
				<h1 className='header-subpage--h1'>{title}</h1>
			</div>
		</header>
	);
}

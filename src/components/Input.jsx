import React from 'react';

export default function Input({ label, id, error, ...props }) {
	return (
		<div className='control'>
			<label htmlFor={id}>{label}</label>
			<input placeholder={label} id={id} {...props} required />
			<div className='control-error'>{error && <p>{error}</p>}</div>
		</div>
	);
}

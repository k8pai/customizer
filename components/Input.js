import React, { useEffect, useState } from 'react';
import generateClasses from '../lib/helpers';

const Input = ({
	id,
	name,
	label,
	autoComplete,
	value,
	onChange,
	submit,
	className,
}) => {
	// console.log(className);
	const [valid, setValid] = useState(false);
	const defaults = `box-border w-full border-gray-400 transition duration-75 font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
		valid ? 'border-green-500' : ''
	} ${submit && !valid ? 'border-red-500' : ''}`;

	var initials = 'border-2 px-3 py-3 rounded-full';
	initials = generateClasses(initials, className);
	useEffect(() => {
		value ? setValid(true) : setValid(false);
	}, [value]);
	return (
		<div className="mb-4">
			<div className="flex justify-between">
				<label
					htmlFor={id}
					className="block text-gray-700 font-bold mb-2"
				>
					{label}
				</label>
				<span> copy code </span>
			</div>
			<input
				type="text"
				id={id}
				name={name}
				autoComplete={autoComplete}
				value={value}
				onChange={onChange}
				className={defaults + initials}
			/>
		</div>
	);
};

export default Input;

// className={`border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
// 	valid ? 'border-green-500' : ''
// } ${submit && !valid ? 'border-red-500' : ''}`}

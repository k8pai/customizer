import React, { useState } from 'react';

const Options = () => {
	const [border, setBorder] = useState(0);
	const [padding, setPadding] = useState(0);
	const [margin, setMargin] = useState(0);

	return (
		<div className="p-5 w-[25%] h-full">
			<div className="flex flex-col justify-start">
				<div className="mb-4">
					<label
						htmlFor="border"
						className="block text-gray-700 font-bold mb-2"
					>
						border
					</label>
					<input
						type="number"
						id="username"
						name="username"
						autoComplete="off"
						// value={state.username}
						// onChange={handleInputChange}
						className={`border-2 border-gray-400 rounded-lg transition-all duration-200 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="border"
						className="block text-gray-700 font-bold mb-2"
					>
						border:
					</label>
					<input
						type="range"
						id="border"
						name="border"
						min="0"
						max="20"
						step={'2'}
						value={border}
						onChange={(e) => setBorder(e.target.value)}
					/>
					<span>{border}</span>
					<datalist id="range-values">
						<option value="2" />
						<option value="4" />
						<option value="6" />
						<option value="8" />
						<option value="10" />
					</datalist>
				</div>

				<div className="mb-4">
					<label
						htmlFor="padding"
						className="block text-gray-700 font-bold mb-2"
					>
						padding:
					</label>
					<input
						type="range"
						id="padding"
						name="padding"
						min="0"
						max="20"
						step={'2'}
						value={padding}
						onChange={(e) => setPadding(e.target.value)}
					/>
					<span>{border}</span>
					<datalist id="range-values">
						<option value="2" />
						<option value="4" />
						<option value="6" />
						<option value="8" />
						<option value="10" />
					</datalist>
				</div>

				<div className="mb-4">
					<label
						htmlFor="margin"
						className="block text-gray-700 font-bold mb-2"
					>
						margin:
					</label>
					<input
						type="range"
						id="margin"
						name="margin"
						min="0"
						max="20"
						step={'2'}
						value={margin}
						onChange={(e) => setMargin(e.target.value)}
					/>
					<span>{border}</span>
				</div>
			</div>
		</div>
	);
};

export default Options;

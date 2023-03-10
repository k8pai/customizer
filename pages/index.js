import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Input from '../components/Input';
import { useEffect, useState } from 'react';
import MySelectField from '../components/MySelectField';
import styles from '../lib/styles';

const inter = Inter({ subsets: ['latin'] });

const buttons = () => {
	const buttonStyles =
		'rounded-lg bg-purple-100 mr-1 mb-2 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75';
	return (
		<div className="flex justify-evenly items-center flex-wrap">
			<button className={buttonStyles}>0</button>
			<button className={buttonStyles}>1</button>
			<button className={buttonStyles}>2</button>
			<button className={buttonStyles}>3</button>
			<button className={buttonStyles}>4</button>
			<button className={buttonStyles}>5</button>
			<button className={buttonStyles}>6</button>
			<button className={buttonStyles}>7</button>
			<button className={buttonStyles}>8</button>
			<button className={buttonStyles}>9</button>
			<button className={buttonStyles}>10</button>
		</div>
	);
};

export default function Home() {
	const [firstName, setFirstName] = useState('');
	const [submit, setSubmit] = useState(false);
	const [customStyle, setCustomStyle] = useState('');
	// const [defaultStyle, setDefaultStyle] = useState();
	const [classList, setClassList] = useState({
		border: '',
		p: '',
		px: '',
		py: '',
		m: '',
		mx: '',
		my: '',
		rounded: '',
		borderClr: '',
	});

	useEffect(() => {
		setCustomStyle(
			Object.entries(classList)
				.filter(([key, value]) => value !== '' && value !== undefined)
				.map(([key, value]) => value)
				.join(' '),
		);
	}, [classList]);

	// const assignClass = (name, value) => {
	// 	switch (name) {
	// 		case 'border':
	// 			const b = `border-[${value}px]`;
	// 			setCustomStyle((styles) =>
	// 				styles.some((s) => s.startsWith('border-'))
	// 					? styles.map((s) => (s.startsWith('border-') ? b : s))
	// 					: [...styles, b],
	// 			);

	// 			return b;
	// 		case 'padding':
	// 			const p = `p-[${value}px]`;
	// 			setCustomStyle((styles) =>
	// 				styles.some((s) => s.startsWith('p-'))
	// 					? styles.map((s) => (s.startsWith('p-') ? p : s))
	// 					: [...styles, p],
	// 			);

	// 			return p;
	// 		case 'margin':
	// 			const m = `m-[${value}px]`;
	// 			setCustomStyle((styles) =>
	// 				styles.some((s) => s.startsWith('m-'))
	// 					? styles.map((s) => (s.startsWith('m-') ? m : s))
	// 					: [...styles, m],
	// 			);
	// 			return m;
	// 		case 'rounded':
	// 			const rnd = `rounded-[${value}px]`;
	// 			setCustomStyle((styles) =>
	// 				styles.some((s) => s.startsWith('rounded-'))
	// 					? styles.map((s) =>
	// 							s.startsWith('rounded-') ? rnd : s,
	// 					  )
	// 					: [...styles, rnd],
	// 			);
	// 			return rnd;
	// 		default:
	// 			return 'nothing';
	// 	}
	// };

	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;

	// 	const res = assignClass(name, value);
	// 	setClassList((prevState) => ({ ...prevState, [name]: value }));
	// };

	return (
		<div className="min-h-screen h-full w-full flex">
			<div className="p-5 w-[25%] h-full">
				<div className="flex flex-col justify-start">
					<div className="mb-4">
						<label
							htmlFor="border"
							className="block text-gray-700 font-bold mb-2"
						>
							border
						</label>
						<MySelectField
							value={styles.borders}
							ind={1}
							name={'border'}
							setState={setClassList}
							state={classList}
						/>
					</div>

					{/* <div className="mb-4">
						<label
							htmlFor="padding"
							className="block text-gray-700 font-bold mb-2"
						>
							padding
						</label>
						<MySelectField
							value={styles.paddings}
							name={'p'}
							setState={setClassList}
							state={classList}
						/>
					</div> */}

					<div className="mb-4">
						<label
							htmlFor="pxsides"
							className="block text-gray-700 font-bold mb-2"
						>
							padding x axis
						</label>
						<MySelectField
							value={styles.paddingSide}
							ind={4}
							name={'px'}
							setState={setClassList}
							state={classList}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="pysides"
							className="block text-gray-700 font-bold mb-2"
						>
							padding y axis
						</label>
						<MySelectField
							value={styles.paddingAxis}
							ind={3}
							name={'py'}
							setState={setClassList}
							state={classList}
						/>
					</div>

					{/* <div className="mb-4">
						<label
							htmlFor="margin"
							className="block text-gray-700 font-bold mb-2"
						>
							margin
						</label>
						<MySelectField
							value={styles.margins}
							name={'m'}
							setState={setClassList}
							state={classList}
						/>
					</div> */}

					<div className="mb-4">
						<label
							htmlFor="mxsides"
							className="block text-gray-700 font-bold mb-2"
						>
							margin x axis
						</label>
						<MySelectField
							value={styles.marginSide}
							ind={0}
							name={'mx'}
							setState={setClassList}
							state={classList}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="mysides"
							className="block text-gray-700 font-bold mb-2"
						>
							margin y axis
						</label>
						<MySelectField
							value={styles.marginAxis}
							ind={0}
							name={'my'}
							setState={setClassList}
							state={classList}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="rounded"
							className="block text-gray-700 font-bold mb-2"
						>
							rounded
						</label>
						<MySelectField
							value={styles.rounded}
							ind={4}
							name={'rounded'}
							setState={setClassList}
							state={classList}
						/>
					</div>
				</div>
			</div>
			<div className="flex-grow flex flex-col items-center justify-center h-screen w-full">
				<form className="bg-white p-10 rounded shadow-lg max-w-3xl w-full mx-auto">
					<Input
						id={'firstName'}
						name={'firstName'}
						label={'First Name'}
						autoComplete={'off'}
						value={firstName}
						submit={submit}
						onChange={(e) => setFirstName(e.target.value)}
						className={customStyle}
					/>
				</form>
			</div>
		</div>
	);
}

import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// const people = [
// 	{ id: 1, name: 'Wade Cooper' },
// 	{ id: 2, name: 'Arlene Mccoy' },
// 	{ id: 3, name: 'Devon Webb' },
// 	{ id: 4, name: 'Tom Cook' },
// 	{ id: 5, name: 'Tanya Fox' },
// 	{ id: 6, name: 'Hellen Schmidt' },
// ];

export default function MySelectField({
	value,
	ind,
	name,
	setState,
	...props
}) {
	const [selected, setSelected] = useState(value[ind]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		setState((el) => ({ ...el, [name]: selected.className }));
	}, [selected]);

	const filteredPeople =
		query === ''
			? value
			: value.filter((elem) =>
					elem.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, '')),
			  );

	return (
		<div className="">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1 border-2 border-gray-500/40 rounded-lg">
					<div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md outline-none focus:outline-none sm:text-sm">
						<Combobox.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-gray-900"
							displayValue={(value) => value.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
							{filteredPeople.length === 0 && query !== '' ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filteredPeople.map((person, ind) => (
									<Combobox.Option
										key={ind}
										className={({ active }) =>
											`relative cursor-default rounded select-none py-2 pl-10 pr-4 ${
												active
													? 'bg-teal-600 text-white'
													: 'text-gray-900'
											}`
										}
										value={person}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected
															? 'font-medium'
															: 'font-normal'
													}`}
												>
													{person.name}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active
																? 'text-white'
																: 'text-teal-600'
														}`}
													>
														<CheckIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}

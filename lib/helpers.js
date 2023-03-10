// const res = generateClasses('border-2 px-4 py-3 rounded-lg', className);

const generateClasses = (val, className) => {
	let arr = val.split(' ');

	className.split(' ').forEach((c) => {
		const [name, value] = c.split('-');
		const index = arr.findIndex((el) => el.includes(name + '-'));
		if (index !== -1) {
			arr[index] = value ? `${name}-${value}` : name;
		} else if (value) {
			arr.push(`${name}-${value}`);
		} else {
			arr.push(name);
		}
	});

	return arr.map((el) => el).join(' ');
};

export default generateClasses;

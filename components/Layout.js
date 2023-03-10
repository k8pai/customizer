import Head from 'next/head';
import React from 'react';
import Options from './Options';

const Layout = ({ children }) => {
	return (
		<div>
			<Head></Head>
			<main className="min-h-screen h-full w-full flex">
				<Options />
				<div className="flex-grow">{children}</div>
			</main>
		</div>
	);
};

export default Layout;

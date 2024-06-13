import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='px-5 py-4 flex items-center justify-between'>
			<h1 className='text-3xl font-bold'>Logo</h1>
			<div className='flex items-center gap-8'>
				<div className='text-lg font-medium flex items-center gap-5'>
					<Link to={"/"}>Home</Link>
					<Link to={"/"}>All Item</Link>
					<Link to={"/"}>Home</Link>
					<Link to={"/"}>Home</Link>
				</div>
				<div className='flex items-center gap-5'>
					<h1 className='font-medium'>User name</h1>
					<button className='bg-violet-500 text-white font-medium px-5 py-1 rounded-lg'>Sign In</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
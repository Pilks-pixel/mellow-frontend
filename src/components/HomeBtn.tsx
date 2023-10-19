import React from 'react'
import Link from 'next/link';

interface HomeBtnProps {
	children?: React.ReactNode;
    page: String;
}


const HomeBtn = ({children, page}: HomeBtnProps) => {
  return (
		<>
			<Link
				className='w-64 h-72 border border-gray-300 rounded-lg bg-gray-400 shadow-md'
				href={`/${page}`}
			>
				{children}
			</Link>
		</>
	);
}



export default HomeBtn


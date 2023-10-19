import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeBtn from '../components/HomeBtn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<header>
				<nav>{/* Navigation elements */}</nav>
			</header>
			<div className='max-w-5xl w-full items-center text-sm'>
				<h1 className='text-xl'>Mellow Meditation</h1>
				<p>
					Welcome to mellow meditation. Which meditation would you like to do
					today?
				</p>
			</div>
			<div className='flex justify-between gap-2'>
				<HomeBtn page='meditation'>start a meditation</HomeBtn>
				<HomeBtn page='signin'>create a profile</HomeBtn>
			</div>
		</main>
	);
}
1
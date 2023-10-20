import React from 'react'
import MeditationMenu from '@/components/MeditationMenu/MeditationMenu';
import MeditationTimer from '@/components/MeditationMenu/meditationTimer';

export default function meditation() {

	return (
		<main className='min-h-screen'>
			<MeditationMenu>
				<MeditationTimer time={70} />
			</MeditationMenu>
		</main>
	);
};


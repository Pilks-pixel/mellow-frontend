import React from 'react'
import MeditationMenu from '@/components/MeditationMenu/MeditationMenu';
import MeditationTimer from '@/components/MeditationMenu/meditationTimer';
import MeditationForm from '@/components/MeditationMenu/MeditationForm';

export default function meditation() {

	return (
		<main className='min-h-screen'>
			<MeditationMenu>
				<MeditationForm />
				<MeditationTimer />
			</MeditationMenu>
		</main>
	);
};


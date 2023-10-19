import React from 'react'
import MeditationMenu from '@/components/MeditationMenu/MeditationMenu';
import MeditationTimer from '@/components/MeditationMenu/meditationTimer';

export default function meditation() {

	return <MeditationMenu>
		<MeditationTimer />
	</MeditationMenu>;
};


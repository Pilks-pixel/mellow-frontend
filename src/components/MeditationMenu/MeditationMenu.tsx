import React from 'react'

interface MeditationMenuProps {
	children?: React.ReactNode;
}


const MeditationMenu = ({ children }: MeditationMenuProps) => {
	return <div>{children}</div>;
};

export default MeditationMenu;
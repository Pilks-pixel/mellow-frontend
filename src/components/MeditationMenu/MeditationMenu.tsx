import React, { useState, createContext, useContext } from 'react'

// types for props
interface MeditationMenuProps {
	children?: React.ReactNode;
}

interface ContextProps {
	meditationType: string;
	handleFormInputs?: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
	time: number;
}

// Context for all Meditation Components
const MedtationOptionsContext = createContext<ContextProps>({meditationType: "forrest", time:5});

const MeditationMenu = ({ children }: MeditationMenuProps) => {

	const [meditationType, setMeditationType] = useState("");
	const [time, setTime] = useState(5)

	const handleFormInputs: 
	React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> 
	= (e): void => {
		e.target.name === "type"
		? setMeditationType(e.target.value)
		: setTime(parseInt(e.target.value));
		console.log(meditationType, time);
	};

	return (
		<MedtationOptionsContext.Provider value={{ meditationType, handleFormInputs, time }}>
			<div className=''>{children}</div>
		</MedtationOptionsContext.Provider>
	);
};

export default MeditationMenu;
export { MedtationOptionsContext }
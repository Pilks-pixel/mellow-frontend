import React, { useEffect, useState, useContext } from "react";
import { MedtationOptionsContext } from "./MeditationMenu";

const meditationTimer = () => {
	const { meditationType, time } = useContext(MedtationOptionsContext);
	const [timerOn, setTimerOn] = useState(false);
	let timeInSeconds = time * 60;
	const [timer, setTimer] = useState(timeInSeconds);
	let [minutes, seconds] = [Math.floor(timer / 60), Math.floor(timer % 60)];
	let count: NodeJS.Timeout | undefined;

	const timerToggleBtn = () => {
		setTimerOn(prevState => !prevState);
	};

    // Timer Effects
	useEffect(() => {
		setTimer(timeInSeconds);
	}, [time]);

	useEffect(() => {
		if (timer <= 0) {
			return () => clearTimeout(count);
		}

		if (timerOn)
			count = setTimeout(() => setTimer(prevTime => prevTime - 1), 1000);

		return () => clearTimeout(count);
	}, [timer, timerOn]);

	return (
		<>
			<div>
				meditationTimer: {minutes} : {seconds >= 10 ? seconds : `0${seconds}`}
			</div>
			<button onClick={timerToggleBtn}>Start</button>
		</>
	);
};

export default meditationTimer;

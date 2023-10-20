import React, { useEffect, useState } from "react";

interface TimeProps {
	time: number;
}

const meditationTimer = ({ time }: TimeProps) => {
	const [timer, setTimer] = useState(time);
	const [timerOn, setTimerOn] = useState(false);
	let count: NodeJS.Timeout | undefined;
	let [minutes, seconds] = [Math.floor(timer / 60), Math.floor(timer % 60)];

	const timerToggleBtn = () => {
		setTimerOn(prevState => !prevState);
	};

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
				meditationTimer: {minutes} : {seconds >= 10? seconds: `0${seconds}`}
			</div>
			<button onClick={timerToggleBtn}>Start</button>
		</>
	);
};

export default meditationTimer;

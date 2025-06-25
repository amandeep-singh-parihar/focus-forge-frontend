import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	startPomodoroAPI,
	updatePomodoroStatusAPI,
} from '../../../services/operations/pomodoroAPI.js';

function PomodoroSession() {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	const { session, loading } = useSelector((state) => state.pomodoro);

	const DEFAULT_DURATION = 25 * 60;
	const [timeLeft, setTimeLeft] = useState(DEFAULT_DURATION);
	const [timerRunning, setTimerRunning] = useState(false);
	const [completed, setCompleted] = useState(false);
	const timerRef = useRef(null);

	useEffect(() => {
		if (timerRunning && timeLeft > 0) {
			timerRef.current = setTimeout(
				() => setTimeLeft((prev) => prev - 1),
				1000,
			);
		} else if (timeLeft === 0 && session?.status === 'active') {
			handleStop('completed');
			setCompleted(true);
		}
		return () => clearTimeout(timerRef.current);
	}, [timeLeft, timerRunning]);

	const formatTime = () => {
		const minutes = Math.floor(timeLeft / 60)
			.toString()
			.padStart(2, '0');
		const seconds = (timeLeft % 60).toString().padStart(2, '0');
		return `${minutes}:${seconds}`;
	};

	const handleStart = async () => {
		await dispatch(startPomodoroAPI(token, { type: 'work', duration: 25 }));
		setTimeLeft(DEFAULT_DURATION);
		setTimerRunning(true);
		setCompleted(false);
	};

	const handlePause = () => {
		clearTimeout(timerRef.current);
		setTimerRunning(false);
		dispatch(updatePomodoroStatusAPI(token, session._id, 'paused'));
	};

	const handleResume = () => {
		setTimerRunning(true);
		dispatch(updatePomodoroStatusAPI(token, session._id, 'active'));
	};

	const handleStop = (status = 'completed') => {
		clearTimeout(timerRef.current);
		setTimerRunning(false);
		dispatch(updatePomodoroStatusAPI(token, session._id, status));
	};

	const handleReset = () => {
		clearTimeout(timerRef.current);
		setTimeLeft(DEFAULT_DURATION);
		setTimerRunning(false);
		setCompleted(false);
	};

	const handleIncrease = (seconds) => {
		setTimeLeft((prev) => prev + seconds);
	};

	return (
		<div
			className={`w-full h-[500px] flex flex-col items-center justify-center gap-6 p-6 rounded-2xl shadow-xl transition-all duration-500 ${
				completed ? 'bg-[#548c2f]' : 'bg-[#14213d]'
			} w-full max-w-md mx-auto`}
		>
			<h2 className="text-3xl font-bold text-[#e5e5e5]">Pomodoro Timer</h2>

			<div className="text-6xl font-mono text-[#e5e5e5]">{formatTime()}</div>

			{!session ? (
				<button
					onClick={handleStart}
					className="bg-[#fca311] text-white px-5 py-2 rounded hover:bg-[#ffee32] transition font-semibold"
				>
					Start Pomodoro
				</button>
			) : (
				<div className="flex gap-4 flex-wrap justify-center">
					{timerRunning ? (
						<button
							onClick={handlePause}
							className="bg-[#fca311] px-4 py-2 rounded text-white hover:bg-[#ffee32]"
						>
							Pause
						</button>
					) : (
						<button
							onClick={handleResume}
							className="bg-[#EB5E28] px-4 py-2 rounded text-[#FFFCF2] hover:bg-[#ef8354]"
						>
							Resume
						</button>
					)}
					<button
						onClick={() => handleStop('completed')}
						className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
					>
						Stop
					</button>
					<button
						onClick={handleReset}
						className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-800"
					>
						Reset
					</button>
				</div>
			)}

			<div className="flex gap-3 mt-3">
				<button
					onClick={() => handleIncrease(60)}
					className="bg-[#fca311] text-white px-3 py-1 rounded hover:bg-indigo-600"
				>
					+1 min
				</button>
				<button
					onClick={() => handleIncrease(5 * 60)}
					className="bg-[#fca311] text-white px-3 py-1 rounded hover:bg-indigo-800"
				>
					+5 min
				</button>
			</div>
		</div>
	);
}

export default PomodoroSession;

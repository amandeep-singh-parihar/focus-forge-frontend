import React from 'react';

function TodayProgress() {
	return (
		<div>
			<div className="text-xl font-semibold capitalize">Today's progress</div>

			<div className="progress-bar flex flex-col text-[#2f2120] capitalize font-medium">
				<div>pomodoro sessions</div>
				<div>tasks completed</div>
				<div>study hours</div>
			</div>
		</div>
	);
}

export default TodayProgress;

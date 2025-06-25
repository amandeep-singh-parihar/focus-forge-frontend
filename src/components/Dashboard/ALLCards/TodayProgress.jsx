import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodaySummaryAPI } from '../../../services/operations/dailySummaryAPI';

function TodayProgress() {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	const { summary, loading, lastFetchedDate } = useSelector(
		(state) => state.dailySummary,
	);

	useEffect(() => {
		const today = new Date().toISOString().split('T')[0];

		// Refetch only if it's a new day or summary is not available
		if (!lastFetchedDate || lastFetchedDate !== today) {
			if (token) {
				dispatch(fetchTodaySummaryAPI(token));
			}
		}
	}, [token, dispatch, lastFetchedDate]);

	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200">
			<h2 className="text-xl font-semibold text-gray-800 mb-4">
				Today's Progress
			</h2>

			{loading ? (
				<p className="text-center text-gray-500">Loading...</p>
			) : summary ? (
				<div className="space-y-2 text-gray-700">
					<p>
						<span className="font-medium">Pomodoro Time:</span>{' '}
						{summary.totalPomodoroMinutes} min
					</p>
					<p>
						<span className="font-medium">Tasks Completed:</span>{' '}
						{summary.tasksCompleted}
					</p>
					<p>
						<span className="font-medium">Goals Completed:</span>{' '}
						{summary.goalsCompleted}
					</p>
					{summary.notes && (
						<p>
							<span className="font-medium">Notes:</span> {summary.notes}
						</p>
					)}
				</div>
			) : (
				<p className="text-center text-gray-500">No summary available.</p>
			)}
		</div>
	);
}

export default TodayProgress;

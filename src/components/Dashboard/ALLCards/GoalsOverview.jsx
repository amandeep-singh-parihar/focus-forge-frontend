import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchGoalsAPI,
	createGoalAPI,
	updateGoalAPI,
	deleteGoalAPI,
} from '../../../services/operations/goalAPI.js';
import { updateTodaySummaryAPI } from '../../../services/operations/dailySummaryAPI.js';

const statusOptions = ['not_started', 'in_progress', 'completed'];

const GoalsOverview = () => {
	const dispatch = useDispatch();
	const { goals, loading } = useSelector((state) => state.goal);
	const token = useSelector((state) => state.auth.token);

	const [formData, setFormData] = useState({
		title: '',
		targetDate: '',
	});

	const [editingGoalId, setEditingGoalId] = useState(null);

	useEffect(() => {
		dispatch(fetchGoalsAPI(token));
	}, [dispatch, token]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editingGoalId) {
			dispatch(updateGoalAPI(editingGoalId, formData, token));
			setEditingGoalId(null);
		} else {
			dispatch(createGoalAPI(formData, token));
		}
		setFormData({ title: '', targetDate: '' });
	};

	const handleEdit = (goal) => {
		setFormData({
			title: goal.title,
			targetDate: goal.targetDate?.split('T')[0] || '',
		});
		setEditingGoalId(goal._id);
	};

	const handleDelete = (id) => {
		dispatch(deleteGoalAPI(id, token));
	};

	const handleStatusChange = (goalId, newStatus) => {
		dispatch(updateGoalAPI(goalId, { status: newStatus }, token));

		if (newStatus === 'completed') {
			dispatch(updateTodaySummaryAPI(token, { goalsCompleted: 1 }));
		}
	};

	const today = new Date().toISOString().split('T')[0];

	return (
		<div className="p-4 w-full max-w-6xl mx-auto">
			<h2 className="text-4xl font-bold mb-4">Your Goals</h2>

			<form
				onSubmit={handleSubmit}
				className="space-y-4 bg-white shadow p-4 rounded-md"
			>
				<input
					type="text"
					name="title"
					placeholder="Enter your Goal"
					value={formData.title}
					onChange={handleChange}
					required
					className="w-full p-2 border rounded border-[#000000] bg-[#E5E5E5]"
				/>
				<input
					type="date"
					name="targetDate"
					value={formData.targetDate}
					onChange={handleChange}
					className="w-full p-2 border border-[#000000] rounded bg-[#E5E5E5]"
					min={today}
				/>
				<button
					type="submit"
					className="bg-[#FCA311] text-[#000000] font-semibold px-4 py-2 rounded"
				>
					{editingGoalId ? 'Update Goal' : 'Add Goal'}
				</button>
			</form>

			<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
				{loading ? (
					<p>Loading...</p>
				) : goals.length === 0 ? (
					<p className="font-semibold">
						<i>No goals yet. Add one!</i>
					</p>
				) : (
					goals.map((goal) => (
						<div key={goal._id} className="p-4 border rounded-md shadow bg-white">
							<h3 className="text-xl font-semibold capitalize">{goal.title}</h3>
							<p className="text-sm text-gray-500 mt-1 mb-1">
								Target : {goal.targetDate?.split('T')[0] || 'N/A'}
							</p>
							<div className="mt-2">
								<label className="text-sm font-medium">Status:</label>
								<select
									value={goal.status}
									onChange={(e) => handleStatusChange(goal._id, e.target.value)}
									className="ml-2 rounded p-1 text-sm px-2 bg-[#E5E5E5] border-2 border-[#000000]"
								>
									{statusOptions.map((status) => (
										<option key={status} value={status}>
											{status.replace('_', ' ').toUpperCase()}
										</option>
									))}
								</select>
							</div>
							<div className="flex gap-2 mt-3">
								<button
									onClick={() => handleEdit(goal)}
									className="text-blue-600 hover:underline border-2 px-2 rounded-md bg-[#E5E5E5] border-[#000000]"
								>
									Edit
								</button>
								<button
									onClick={() => handleDelete(goal._id)}
									className="text-red-600 hover:underline border-2 px-2 rounded-md bg-[#E5E5E5] border-[#000000]"
								>
									Delete
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default GoalsOverview;

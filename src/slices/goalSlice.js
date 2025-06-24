import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	goals: [],
	loading: false,
	error: null,
};

const goalSlice = createSlice({
	name: 'goals',
	initialState: initialState,
	reducers: {
		setGoals: (state, value) => {
			state.goals = value.payload;
		},
		addGoal: (state, value) => {
			state.goals.unshift(value.payload);
		},
		updateGoal: (state, value) => {
			state.goals = state.goals.map((goal) =>
				goal._id === value.payload._id ? value.payload : goal,
			);
		},
		deleteGoal: (state, value) => {
			state.goals = state.goals.filter((goal) => goal._id !== value.payload);
		},
		setGoalLoading: (state, value) => {
			state.loading = value.payload;
		},
		setGoalError: (state, value) => {
			state.error = value.payload;
		},
	},
});

export const {
	setGoals,
	addGoal,
	updateGoal,
	deleteGoal,
	setGoalLoading,
	setGoalError,
} = goalSlice.actions;

export default goalSlice.reducer;

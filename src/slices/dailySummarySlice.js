import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	summary: null,
	loading: false,
	error: null,
	lastFetchedDate: null,
};

const dailySummarySlice = createSlice({
	name: 'dailySummary',
	initialState,
	reducers: {
		setSummary(state, action) {
			state.summary = action.payload;
		},
		setSummaryLoading(state, action) {
			state.loading = action.payload;
		},
		setSummaryError(state, action) {
			state.error = action.payload;
		},
		setLastFetchedDate(state, action) {
			state.lastFetchedDate = action.payload;
		},
	},
});

export const {
	setSummary,
	setSummaryLoading,
	setSummaryError,
	setLastFetchedDate,
} = dailySummarySlice.actions;

export default dailySummarySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	duration: 25,
	loading: false,
	error: null,
	session: null,
	sessions: [],
};

const pomodoroSlice = createSlice({
	name: 'pomodoro',
	initialState,
	reducers: {
		startPomodoro: (state, action) => {
			state.duration = action.payload;
		},
		updatePomodoroStatus: (state, action) => {
			if (state.session) {
				state.session.status = action.payload.status;
				if (action.payload.stoppedAt) {
					state.session.stoppedAt = action.payload.stoppedAt;
				}
			}
		},
		setPomodoroLoading: (state, action) => {
			state.loading = action.payload;
		},
		setPomodoroError: (state, action) => {
			state.error = action.payload;
		},
		setPomodoroSession: (state, action) => {
			state.session = action.payload;
		},
		setPomodoroSessions: (state, action) => {
			state.sessions = action.payload;
		},
	},
});

export const {
	startPomodoro,
	updatePomodoroStatus,
	setPomodoroLoading,
	setPomodoroError,
	setPomodoroSession,
	setPomodoroSessions,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;

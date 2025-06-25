import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice';
import goalReducer from '../slices/goalSlice.js';
import pomodoroReducer from '../slices/pomodoroSlice.js';
import dailySummaryReducer from '../slices/dailySummarySlice';
import profileReducer from '../slices/profileSlice.js';

const rootReducer = combineReducers({
	auth: authReducer,
	goal: goalReducer,
	pomodoro: pomodoroReducer,
	dailySummary: dailySummaryReducer,
	profile: profileReducer,
	// more to come
});

export default rootReducer;

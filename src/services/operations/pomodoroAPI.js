import { toast } from 'react-hot-toast';
import { pomodoroEndpoints } from '../apis.js';
import { apiConnector } from '../apiconnector.js';
import {
	startPomodoro,
	updatePomodoroStatus,
	setPomodoroLoading,
	setPomodoroSession,
	setPomodoroSessions,
	setPomodoroError,
} from '../../slices/pomodoroSlice.js';

const {
	START_POMODORO_API,
	UPDATE_POMODORO_STATUS_API,
	GET_POMODORO_SESSIONS_API,
} = pomodoroEndpoints;

export const startPomodoroAPI = (
	token,
	data = { type: 'work', duration: 25 },
) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setPomodoroLoading(true));

		// debug
		console.log('🚀 Sent Token:', token);
		// Debug

		try {
			const response = await apiConnector('POST', START_POMODORO_API, data, {
				Authorization: `Bearer ${token}`,
			});
			// debug
			console.log('Using token:', token);
			// DEbug
			dispatch(setPomodoroSession(response.data?.data || []));
			toast.success('Pomodoro Started successfully!');
		} catch (error) {
			console.log('START_POMODORO_API RESPONSE ERROR : ', error);
			dispatch(setPomodoroError(error.message));
			toast.error('Could not Start the Pomodoro');
		} finally {
			dispatch(setPomodoroLoading(false));
			toast.dismiss(toastId);
		}
	};
};

export const updatePomodoroStatusAPI = (token, sessionId, status) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setPomodoroLoading(true));

		try {
			const url = UPDATE_POMODORO_STATUS_API(sessionId);
			const response = await apiConnector(
				'PUT',
				url,
				{ status },
				{ Authorization: `Bearer ${token}` },
			);
			dispatch(updatePomodoroStatus(response.data?.data));
			toast.success('Session updated');
		} catch (error) {
			console.log('UPDATE_POMODORO_STATUS_API RESPONSE ERROR : ', error);
			dispatch(setPomodoroError(error.message));
			toast.error('Failed to update session');
		} finally {
			dispatch(setPomodoroLoading(false));
			toast.dismiss(toastId);
		}
	};
};

export const fetchPomodoroSessionsAPI = (token) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setPomodoroLoading(true));

		try {
			const response = await apiConnector(
				'GET',
				GET_POMODORO_SESSIONS_API,
				null,
				{
					Authorization: `Bearer ${token}`,
				},
			);
			dispatch(setPomodoroSessions(response.data?.data || []));
			toast.success('Pomodoro sessions fetched successfully!');
		} catch (error) {
			console.log('GET_POMODORO_SESSIONS_API RESPONSE ERROR : ', error);
			dispatch(setPomodoroError(error.message));
			toast.error('Could not fetch pomodoro sessions');
		} finally {
			dispatch(setPomodoroLoading(false));
			toast.dismiss(toastId);
		}
	};
};

import { apiConnector } from '../apiconnector';
import { toast } from 'react-hot-toast';
import {
	setSummary,
	setSummaryLoading,
	setSummaryError,
} from '../../slices/dailySummarySlice';
import { dailySummaryEndpoints } from '../apis';

const { GET_TODAY_SUMMARY_API, UPDATE_SUMMARY_API } = dailySummaryEndpoints;

export const fetchTodaySummaryAPI = (token) => {
	return async (dispatch) => {
		dispatch(setSummaryLoading(true));
		try {
			const response = await apiConnector('GET', GET_TODAY_SUMMARY_API, null, {
				Authorization: `Bearer ${token}`,
			});
			dispatch(setSummary(response.data.data));
		} catch (error) {
			console.log('FETCH_SUMMARY_ERROR:', error);
			dispatch(setSummaryError(error.message));
			toast.error("Failed to fetch today's summary");
		} finally {
			dispatch(setSummaryLoading(false));
		}
	};
};

export const updateTodaySummaryAPI = (token, data) => {
	return async (dispatch) => {
		dispatch(setSummaryLoading(true));
		try {
			const response = await apiConnector('PUT', UPDATE_SUMMARY_API, data, {
				Authorization: `Bearer ${token}`,
			});
			dispatch(setSummary(response.data.data));
			toast.success('Summary updated!');
		} catch (error) {
			console.log('UPDATE_SUMMARY_ERROR:', error);
			dispatch(setSummaryError(error.message));
			toast.error("Could not update today's summary");
		} finally {
			dispatch(setSummaryLoading(false));
		}
	};
};

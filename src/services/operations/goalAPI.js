import { toast } from 'react-hot-toast';
import { goalEndpoints } from '../apis.js';
import { apiConnector } from '../apiconnector.js';
import {
	setGoalLoading,
	setGoals,
	addGoal,
	updateGoal,
	deleteGoal,
} from '../../slices/goalSlice.js';

const {
	CREATE_GOAL_API,
	GET_USER_GOALS_API,
	UPDATE_GOAL_API,
	DELETE_GOAL_API,
} = goalEndpoints;

export const fetchGoalsAPI = (token) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setGoalLoading(true));

		try {
			const response = await apiConnector('GET', GET_USER_GOALS_API, null, {
				Authorization: `Bearer ${token}`,
			});
			dispatch(setGoals(response.data?.data || []));
			toast.success('Goals Fetched Successfully!');
		} catch (error) {
			console.log('GET_USER_GOALS_API RESPONSE ERROR : ', error);
			toast.error("Could not fetched user's goals");
		}
		dispatch(setGoalLoading(false));
		toast.dismiss(toastId);
	};
};

export const createGoalAPI = (goalData, token) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setGoalLoading(true));

		try {
			const response = await apiConnector('POST', CREATE_GOAL_API, goalData, {
				Authorization: `Bearer ${token}`,
			});

			dispatch(addGoal(response.data?.data));
			toast.success('Goal Created Successfully!');
		} catch (error) {
			console.log('CREATE_GOAL_API RESPONSE ERROR : ', error);
			toast.error('Could not create goal');
		}
		dispatch(setGoalLoading(false));
		toast.dismiss(toastId);
	};
};

export const updateGoalAPI  = (goalId, updates, token) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setGoalLoading(true));

		try {
			const response = await apiConnector(
				'PUT',
				UPDATE_GOAL_API(goalId),
				updates,
				{
					Authorization: `Bearer ${token}`,
				},
			);
			dispatch(updateGoal(response.data?.data));

			toast.success('Goal updated successfully!');
		} catch (error) {
			console.log('UPDATE_GOAL_API RESPONSE ERROR : ', error);
			toast.error('Could not update goal');
		}
		dispatch(setGoalLoading(false));
		toast.dismiss(toastId);
	};
};

export const deleteGoalAPI = (goalId, token) => {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setGoalLoading(true));

		try {
			const response = await apiConnector(
				'DELETE',
				DELETE_GOAL_API(goalId),
				null,
				{
					Authorization: `Bearer ${token}`,
				},
			);
			dispatch(deleteGoal(goalId));
			toast.success('goal deleted successfully!');
		} catch (error) {
			console.log('DELETE_GOAL_API RESPONSE ERROR : ', error);
			toast.error('Could not delete goal');
		}
		dispatch(setGoalLoading(false));
		toast.dismiss(toastId);
	};
};

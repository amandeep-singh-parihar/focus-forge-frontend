const BASE_URL = import.meta.env.VITE_BASE_URL;

// auth endpoints
export const authEndpoints = {
	SENDOTP_API: BASE_URL + '/auth/sendOtp',
	SIGNUP_API: BASE_URL + '/auth/register',
	LOGIN_API: BASE_URL + '/auth/login',
	//profile api ?
};

// goal endpoints
export const goalEndpoints = {
	CREATE_GOAL_API: BASE_URL + '/goals/create',
	GET_USER_GOALS_API: BASE_URL + '/goals/',
	UPDATE_GOAL_API: (goalId) => BASE_URL + `/goals/${goalId}`,
	DELETE_GOAL_API: (goalId) => BASE_URL + `/goals/${goalId}`,
};

// pomodoro endpoints
export const pomodoroEndpoints = {
  START_POMODORO_API: BASE_URL + '/pomodoro/start',
  UPDATE_POMODORO_STATUS_API: (sessionId) => BASE_URL + `/pomodoro/${sessionId}/status`,
  GET_POMODORO_SESSIONS_API: BASE_URL + '/pomodoro/user',
};

// summary endpoints
export const summaryEndpoints = {
	GET_TODAY_SUMMARY_API: BASE_URL + '/summary/',
	UPDATE_SUMMARY_API: BASE_URL + '/summary/update',
};

// task endpoints
export const taskEndpoints = {
	CREATE_TASK_API: BASE_URL + '/tasks/create',
	GET_ALL_TASK_API: BASE_URL + '/tasks/my-tasks',
	UPDATE_TASK_API: (taskId) => BASE_URL + `/tasks/update/${taskId}`,
	DELETE_TASK_API: (taskId) => BASE_URL + `/tasks/delete/${taskId}`,
	GET_KANBAN_API: BASE_URL + '/tasks/kanban',
	UPDATE_TASK_STATUS_API: (taskId) => BASE_URL + `/tasks/${taskId}/status`,
};

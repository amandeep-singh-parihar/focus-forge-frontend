import { toast } from 'react-hot-toast';
import { authEndpoints } from '../apis.js';
import { setLoading, setToken } from '../../slices/authSlice.js';
import { apiConnector } from '../apiconnector.js';
import { setUser } from '../../slices/profileSlice.js';

const { SENDOTP_API, SIGNUP_API, LOGIN_API } = authEndpoints;

export function sendOtp(email, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setLoading(true));

		try {
			const response = await apiConnector('POST', SENDOTP_API, {
				email,
				checkUserPresent: true,
			});

			console.log('SENDOTP_API RESPONSE... ', response);

			console.log(response.data.success);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success('OTP Send Successfully!');
			navigate('/verify-email');
		} catch (error) {
			console.log('SENDOTP_API RESPONSE ERROR:', error);
			toast.error('Could not send OTP');
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

export function signUp(
	firstName,
	lastName,
	email,
	password,
	confirmPassword,
	otp,
	navigate,
) {
	return async (dispatch) => {
		const toastId = toast.loading('Loading...');
		dispatch(setLoading(true));

		try {
			const response = await apiConnector('POST', SIGNUP_API, {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				otp,
			});

			console.log('SIGNUP_API RESPONSE.', response);

			console.log(response.data.success);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success('Signup successful');
			navigate('/login');
		} catch (error) {
			console.log('SIGNUP_API ERROR.', error);
			toast.error('Could Not Sign up user');
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

export function login(email, password, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading('Logging in...');
		dispatch(setLoading(true));

		try {
			const response = await apiConnector('POST', LOGIN_API, {
				email,
				password,
			});

			console.log('LOGIN API RESPONSE:', response);

			if (!response?.data?.success) {
				toast.error(response?.data?.message || 'Login failed');
				dispatch(setLoading(false));
				toast.dismiss(toastId);
				return;
			}

			const token = response.data.token;
			const user = response.data?.user;

			if (!user) {
				toast.error('User data is missing in response');
				dispatch(setLoading(false));
				toast.dismiss(toastId);
				return;
			}

			dispatch(setToken(token));
			const userImage = user?.image
				? user.image
				: `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
			dispatch(setUser({ ...user, image: userImage }));

			// localStorage.setItem("token", JSON.stringify(token));
			// localStorage.setItem("user", JSON.stringify(user));

			localStorage.setItem('token', JSON.stringify(response.data.token));
			localStorage.setItem('user', JSON.stringify(user));

			toast.success('Login Successful');
			navigate('/dashboard/my-profile');
		} catch (error) {
			console.error('LOGIN API ERROR:', error);
			toast.error('Could not login');
		} finally {
			dispatch(setLoading(false));
			toast.dismiss(toastId);
		}
	};
}

export function logout(navigate) {
	return (dispatch) => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		toast.success('Logged Out');
		navigate('/');
	};
}

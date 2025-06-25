import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { RxCountdownTimer } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
	const [otp, setOtp] = useState('');
	const { loading, signupData } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!signupData) navigate('/signup');
	}, []);

	const handleVerifyAndSignup = (e) => {
		e.preventDefault();
		const { firstName, lastName, email, password, confirmPassword } =
			signupData;
		dispatch(
			signUp(
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				otp,
				navigate,
			),
		);
	};

	return (
		<div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
			{loading ? (
				<div>
					<div className="spinner"></div>
				</div>
			) : (
				<div className="bg-[#403D39] rounded-lg max-w-[500px] p-8 lg:p-8">
					<h1 className="text-[#FFFCF2] font-semibold text-[1.875rem] leading-[2.375rem]">
						Verify Email
					</h1>
					<p className="text-[1.125rem] leading-[1.625rem] my-4 text-[#FFFCF2]">
						A verification code has been sent to you. Enter the code below
					</p>
					<form onSubmit={handleVerifyAndSignup}>
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							renderInput={(props) => (
								<input
									{...props}
									placeholder="-"
									style={{
										boxShadow: 'inset 0px -1px 0px #403D39',
									}}
									className="w-[48px] lg:w-[60px] border-0 bg-[#E5E5E5] rounded-[0.5rem]  aspect-square text-center focus:border-0 focus:outline-2 "
								/>
							)}
							containerStyle={{
								justifyContent: 'space-between',
								gap: '0 6px',
							}}
						/>
						<button
							type="submit"
							className="w-full bg-[#EB5E28] py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-[#FFFCF2] focus:ring-[#EB5E28] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
						>
							Verify Email
						</button>
					</form>
					<div className="mt-6 flex items-center justify-between">
						<Link to="/signup">
							<p className="text-[#fdfffc] flex items-center gap-x-2">
								<BiArrowBack /> Back To Signup
							</p>
						</Link>
						<button
							className="flex items-center text-blue-100 gap-x-2"
							onClick={() => dispatch(sendOtp(signupData.email))}
						>
							<RxCountdownTimer />
							Resend it
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default VerifyEmail;

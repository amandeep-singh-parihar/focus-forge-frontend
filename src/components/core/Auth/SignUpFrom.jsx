import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { setSignupData } from '../../../slices/authSlice.js';
import { sendOtp } from '../../../services/operations/authAPI.js';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { firstName, lastName, email, password, confirmPassword } = formData;

	const handleOnChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
			return;
		}

		const signupData = {
			...formData,
			accountType: 'student', // hardcoded or dynamic if needed
		};

		dispatch(setSignupData(signupData));
		dispatch(sendOtp(email, navigate));
	};

	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12">
			{/* Outer container for the glass card effect */}
			<div
				className="
          relative z-10 p-6 rounded-lg shadow-lg
          bg-white bg-opacity-10
          backdrop-blur-md backdrop-filter
          border border-solid border-white border-opacity-30
          w-full max-w-xl
          md:p-8
        "
				style={{
					// Adding a subtle inner shadow to enhance the glass look
					boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
				}}
			>
				<h2 className="mb-6 text-3xl font-bold text-[#fdfffc] text-center">
					Create an Account
				</h2>
				<p className="text-[#AFB2BF] text-center mb-6">
					Join us and start your learning journey today!
				</p>

				<form onSubmit={handleOnSubmit} className="space-y-5">
					{/* First and Last Name */}
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnChange}
							required
							placeholder="First Name"
							className="w-full sm:w-1/2 rounded-md border border-gray-600 bg-[#292f36] p-3 text-[#fdfffc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
						/>
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							required
							placeholder="Last Name"
							className="w-full sm:w-1/2 rounded-md border border-gray-600 bg-[#292f36] p-3 text-[#fdfffc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
						/>
					</div>

					{/* Email */}
					<input
						type="email"
						name="email"
						value={email}
						onChange={handleOnChange}
						required
						placeholder="Email"
						className="w-full rounded-md border border-gray-600 bg-[#292f36] p-3 text-[#fdfffc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
					/>

					{/* Password */}
					<div className="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							name="password"
							value={password}
							onChange={handleOnChange}
							required
							placeholder="Password"
							className="w-full rounded-md border border-gray-600 bg-[#292f36] p-3 pr-10 text-[#fdfffc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
						/>
						<span
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
						>
							{showPassword ? (
								<AiOutlineEyeInvisible size={22} />
							) : (
								<AiOutlineEye size={22} />
							)}
						</span>
					</div>

					{/* Confirm Password */}
					<div className="relative">
						<input
							type={showConfirmPassword ? 'text' : 'password'}
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleOnChange}
							required
							placeholder="Confirm Password"
							className="w-full rounded-md border border-gray-600 bg-[#292f36] p-3 pr-10 text-[#fdfffc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
						/>
						<span
							onClick={() => setShowConfirmPassword((prev) => !prev)}
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
						>
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible size={22} />
							) : (
								<AiOutlineEye size={22} />
							)}
						</span>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="
              w-full rounded-md bg-[#ccff33] px-4 py-3 font-semibold
              text-black transition-all duration-200 hover:scale-95
              shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none
              focus:outline-none focus:ring-2 focus:ring-[#ccff33] focus:ring-offset-2
            "
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUpForm;

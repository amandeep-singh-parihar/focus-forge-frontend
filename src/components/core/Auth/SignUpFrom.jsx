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

	const loginHandler = () => {
		navigate('/login');
	};

	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12">
			{/* Outer container for the glass card effect */}
			<div
				className="bg-[#1e1e1e]
          relative z-10 p-6 rounded-lg shadow-lg
          backdrop-blur-md backdrop-filter
          border border-solid border-[#252422] border-opacity-30
          w-full max-w-xl
          md:p-8 hover:border-[#01aad3] hover:border-2  hover:bg-[rgba(1,170,211,0.05)] transition duration-300
        "
			>
				<h2 className="mb-6 text-3xl font-bold text-[#FFFCF2] text-center">
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
							className="w-full sm:w-1/2 rounded-md   bg-[#3f3d3a] p-3 text-[#FFFCF2] focus:outline-none focus:ring-2 focus:ring-[#01aad3]"
						/>
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							required
							placeholder="Last Name"
							className="w-full sm:w-1/2 rounded-md  bg-[#403D39] p-3 text-[#FFFCF2] focus:outline-none focus:ring-2 focus:ring-[#01aad3]"
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
						className="w-full rounded-md   bg-[#403D39] p-3 text-[#FFFCF2] focus:outline-none focus:ring-2 focus:ring-[#01aad3]"
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
							className="w-full rounded-md   bg-[#403D39] p-3 pr-10 text-[#FFFCF2] focus:outline-none focus:ring-2 focus:ring-[#01aad3]"
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
							className="w-full rounded-md  bg-[#403D39] p-3 pr-10 text-[#FFFCF2] focus:outline-none focus:ring-2 focus:ring-[#01aad3]"
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
              w-full rounded-md bg-[#fe4a4b] px-4 py-3 font-semibold
              text-[#FFFCF2] transition-all duration-200 hover:scale-95
              shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none
              focus:outline-none focus:ring-2 focus:ring-[#01aad3] focus:ring-offset-2
            "
					>
						Sign Up
					</button>
				</form>
				<div
					onClick={() => loginHandler()}
					className="text-[#FFFCF2] mt-6 text-center cursor-pointer"
				>
					<p>
						Already have an account <span className="underline">LogIn</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;

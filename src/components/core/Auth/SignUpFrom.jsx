import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
// import { sendOtp, setSignupData } from '../../../redux/slices/authSlice';
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
			<div className="w-full max-w-xl rounded-lg bg-gray-800 p-8 shadow-lg">
				<h2 className="mb-6 text-3xl font-bold text-white">
					Create an account
				</h2>
				<form onSubmit={handleOnSubmit} className="space-y-5">
					{/* First and Last Name */}
					<div className="flex gap-4">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnChange}
							required
							placeholder="First Name"
							className="w-1/2 rounded-md border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
						/>
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							required
							placeholder="Last Name"
							className="w-1/2 rounded-md border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
						className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
							className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
							className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
						className="w-full rounded-md bg-rose-600 px-4 py-3 text-white hover:bg-rose-700 transition-all duration-200 font-semibold"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUpForm;

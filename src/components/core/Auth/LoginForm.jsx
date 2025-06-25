import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../services/operations/authAPI';

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [showPassword, setShowPassword] = useState(false);

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password, navigate));
	};

	const signUPHandler = () => {
		navigate('/');
	};

	return (
		<div
			className="
        relative z-10 p-6 rounded-lg shadow-lg
        bg-[#252422]
        backdrop-blur-md backdrop-filter
        border border-solid border-[#252422] border-opacity-30
        max-w-lg
        mx-auto my-8
        md:p-8 w-[450px] h-[500px]"
		>
			<h2 className="text-3xl font-semibold text-[#FFFCF2] mb-4 text-center mt-8">
				Welcome Back!
			</h2>
			<p className="text-[#FFFCF2] text-center mb-6">
				Log in to continue your learning journey.
			</p>

			<form
				onSubmit={handleOnSubmit}
				className="mt-6 flex w-full flex-col gap-y-4"
			>
				<label className="w-full">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#FFFCF2]">
						Email Address <sup className="text-[#EB5E28]">*</sup>
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="w-full rounded-[0.5rem] bg-[#403D39] text-[#FFFCF2] p-[12px] focus:outline-none focus:ring-2 focus:ring-[#EB5E28]"
					/>
				</label>
				<label className="relative">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#FFFCF2]">
						Password <sup className="text-[#EB5E28]">*</sup>
					</p>
					<input
						required
						type={showPassword ? 'text' : 'password'}
						name="password"
						value={password}
						onChange={handleOnChange}
						placeholder="Enter Password"
						className="w-full rounded-[0.5rem] bg-[#403D39] text-[#FFFCF2] p-[12px] pr-12 focus:outline-none focus:ring-2 focus:ring-[#EB5E28]"
					/>
					<span
						onClick={() => setShowPassword((prev) => !prev)}
						className="absolute right-3 top-[38px] z-[10] cursor-pointer"
					>
						{showPassword ? (
							<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
						) : (
							<AiOutlineEye fontSize={24} fill="#AFB2BF" />
						)}
					</span>
				</label>
				<button
					type="submit"
					className="
            mt-6 rounded-[8px] bg-[#EB5E28] py-[8px] px-[12px] font-medium
            text-[#FFFCF2] transition-all duration-200 hover:scale-95
            shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none
            focus:outline-none focus:ring-2 focus:ring-[#EB5E28] focus:ring-offset-2
          "
				>
					Sign In
				</button>
			</form>
			<div
				onClick={() => {
					signUPHandler();
				}}
				className="text-white text-center mt-4 cursor-pointer"
			>
				Don't have an account yet? <span className="underline">Sign Up</span>
			</div>
		</div>
	);
}

export default LoginForm;

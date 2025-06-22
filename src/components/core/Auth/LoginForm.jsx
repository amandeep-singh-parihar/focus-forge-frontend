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

	return (
		<div
			className="
        relative z-10 p-6 rounded-lg shadow-lg
        bg-white bg-opacity-10
        backdrop-blur-md backdrop-filter
        border border-solid border-white border-opacity-30
        max-w-lg
        mx-auto my-8
        md:p-8
      "
			style={{
				boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
			}}
		>
			<h2 className="text-3xl font-semibold text-[#fdfffc] mb-4 text-center">
				Welcome Back!
			</h2>
			<p className="text-[#AFB2BF] text-center mb-6">
				Log in to continue your learning journey.
			</p>

			<form
				onSubmit={handleOnSubmit}
				className="mt-6 flex w-full flex-col gap-y-4"
			>
				<label className="w-full">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#fdfffc]">
						Email Address <sup className="text-rose-700">*</sup>
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="w-full rounded-[0.5rem] bg-[#343a40] text-[#fdfffc] p-[12px] text-richblack-5 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
					/>
				</label>
				<label className="relative">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-[#fdfffc]">
						Password <sup className="text-rose-700">*</sup>
					</p>
					<input
						required
						type={showPassword ? 'text' : 'password'}
						name="password"
						value={password}
						onChange={handleOnChange}
						placeholder="Enter Password"
						className="w-full rounded-[0.5rem] bg-[#343a40] text-[#fdfffc] p-[12px] pr-12 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-[#ccff33]"
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
					<Link to="/forgot-password">
						<p className="mt-1 ml-auto max-w-max text-xs text-blue-100 hover:text-[#ccff33] transition-colors duration-200">
							Forgot Password
						</p>
					</Link>
				</label>
				<button
					type="submit"
					className="
            mt-6 rounded-[8px] bg-[#ccff33] py-[8px] px-[12px] font-medium
            text-richblack-900 transition-all duration-200 hover:scale-95
            shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none
            focus:outline-none focus:ring-2 focus:ring-[#ccff33] focus:ring-offset-2
          "
				>
					Sign In
				</button>
			</form>
		</div>
	);
}

export default LoginForm;

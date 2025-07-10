import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authAPI';
import { Link } from 'react-router-dom';

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.profile);

	const handleLogout = () => {
		dispatch(logout(navigate));
	};

	return (
		<nav className="flex justify-between items-center px-6 py-3 bg-[#0f1116] shadow-md mb-4">
			<div
				className="text-xl font-bold text-white cursor-pointer"
				onClick={() => navigate('/dashboard/my-profile')}
			>
				FocusForge
			</div>
			<div className="flex gap-7 items-center font-semibold text-white">
				<Link to="/dashboard/my-profile" className="hover:text-[#01aad3]">
					Dashboard
				</Link>
				<Link to="/dashboard/kanban" className="hover:text-[#01aad3]">
					Tasks
				</Link>
				<Link to="/dashboard/goals" className="hover:text-[#01aad3]">
					Goals
				</Link>
				<Link to="/dashboard/pomodoro" className="hover:text-[#01aad3]">
					Pomodoro
				</Link>
				<Link to="/dashboard/progress" className="hover:text-[#01aad3]">
					Progress
				</Link>
				<Link to="/dashboard/my-profile" className="hover:text-[#01aad3]">
					Profile
				</Link>

				<button
					onClick={handleLogout}
					className="bg-[#fe4a4b] px-3 py-1 text-white rounded-md hover:scale-95 transition-transform duration-200"
				>
					Logout
				</button>

				{user && (
					<img
						src={user?.image}
						alt="Profile"
						className="w-8 h-8 rounded-full border-[0.25px]"
					/>
				)}
			</div>
		</nav>
	);
}

export default Navbar;

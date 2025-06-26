import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authAPI';

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.profile);

	const handleLogout = () => {
		dispatch(logout(navigate));
	};

	return (
		<nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md mb-4">
			<div
				className="text-xl font-bold text-black cursor-pointer"
				onClick={() => navigate('/dashboard/my-profile')}
			>
				FocusForge
			</div>
			<div className="flex gap-7 items-center font-semibold">
				<NavLink to="/dashboard/my-profile" className="hover:text-blue-600">
					Dashboard
				</NavLink>
				<NavLink to="/dashboard/kanban" className="hover:text-blue-600">
					Tasks
				</NavLink>
				<NavLink to="/dashboard/goals" className="hover:text-blue-600">
					Goals
				</NavLink>
				<NavLink to="/dashboard/pomodoro" className="hover:text-blue-600">
					Pomodoro
				</NavLink>
				<NavLink to="/dashboard/progress" className="hover:text-blue-600">
					Progress
				</NavLink>
				<NavLink to="/dashboard/my-profile" className="hover:text-blue-600">
					Profile
				</NavLink>

				<button
					onClick={handleLogout}
					className="bg-red-500 px-3 py-1 text-white rounded-md border-2 border-black hover:bg-rose-700"
				>
					Logout
				</button>

				{user && (
					<img
						src={user?.image}
						alt="Profile"
						className="w-8 h-8 rounded-full border"
					/>
				)}
			</div>
		</nav>
	);
}

export default Navbar;

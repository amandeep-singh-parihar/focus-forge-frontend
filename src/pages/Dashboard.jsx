import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import DashboardSidebar from '../components/core/Dashboard/DashboardSidebar.jsx';

function Dashboard() {
	const { loading: authLoading } = useSelector((state) => state.auth);
	const { loading: profileLoading } = useSelector((state) => state.profile);

	if (profileLoading || authLoading) {
		return (
			<div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
				<div className="spinner"></div>
			</div>
		);
	}

	return (
		<div className="relative flex min-h-screen">
			<div className="bg-white">
				<Sidebar />
			</div>

			<div className="flex-1 overflow-y-auto">
				<div className="mx-auto w-11/12 max-w-[1000px] py-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx'; // Adjust path if necessary

function DashboardLayout() {
	return (
		<div>
			<Navbar />

			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default DashboardLayout;

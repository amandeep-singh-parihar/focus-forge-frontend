import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OpenRoute from './components/core/Auth/OpenRoute.jsx';
import Signup from './pages/Signup.jsx';
import VerifyEmail from './pages/VerifyEmail.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import PrivateRoute from './components/core/Auth/PrivateRoute.jsx';
import DashboardLayout from './components/common/DashboardLayout.jsx';
import MyProfile from './components/Dashboard/MyProfile.jsx';
import TodayProgress from './components/Dashboard/ALLCards/TodayProgress.jsx';
import GoalsOverview from './components/Dashboard/ALLCards/GoalsOverview.jsx';
import Kanban from './components/Dashboard/ALLCards/Kanban.jsx';
import PomodoroSession from './components/Dashboard/ALLCards/PomodoroSession.jsx';
import AboutUs from './components/Dashboard/ALLCards/AboutUs.jsx';
import Pricing from './components/Dashboard/ALLCards/Pricing.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* public Routes */}
				<Route
					path="/"
					element={
						<OpenRoute>
							<Signup />
						</OpenRoute>
					}
				/>
				<Route
					path="verify-email"
					element={
						<OpenRoute>
							<VerifyEmail />
						</OpenRoute>
					}
				/>
				<Route
					path="login"
					element={
						<OpenRoute>
							<Login />
						</OpenRoute>
					}
				/>

				<Route
					element={
						<PrivateRoute>
							<DashboardLayout />
						</PrivateRoute>
					}
				>
					<Route path="/dashboard/my-profile" element={<MyProfile />} />
					<Route path="/dashboard/progress" element={<TodayProgress />} />
					<Route path="/dashboard/goals" element={<GoalsOverview />} />
					<Route path="/dashboard/kanban" element={<Kanban />} />
					<Route path="/dashboard/pomodoro" element={<PomodoroSession />} />

					<Route path="/about" element={<AboutUs />} />
					<Route path="/pricing" element={<Pricing />} />

					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

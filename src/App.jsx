import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OpenRoute from './components/core/Auth/OpenRoute.jsx';
import Signup from './pages/Signup.jsx';
import VerifyEmail from './pages/VerifyEmail.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import MyProfile from '../src/components/Dashboard/MyProfile.jsx';
import TodayProgress from '../src/components/Dashboard/ALLCards/TodayProgress.jsx';
import GoalsOverview from '../src/components/Dashboard/ALLCards/GoalsOverview.jsx';
import Kanban from '../src/components/Dashboard/ALLCards/Kanban.jsx';
import PomodoroSession from '../src/components/Dashboard/ALLCards/PomodoroSession.jsx';
import AboutUs from '../src/components/Dashboard/ALLCards/AboutUs.jsx';
import Pricing from '../src/components/Dashboard/ALLCards/Pricing.jsx';
import NotFoundPage from '../src/pages/NotFoundPage.jsx';
import PrivateRoute from '../src/components/core/Auth/PrivateRoute.jsx';

function App() {
	return (
		<div className="App h-screen w-full flex items-center justify-center">
			<Routes>
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
					path="dashboard/my-profile"
					element={
						<PrivateRoute>
							<MyProfile />
						</PrivateRoute>
					}
				/>

				<Route
					path="/dashboard/progress"
					element={
						<PrivateRoute>
							<TodayProgress />
						</PrivateRoute>
					}
				/>

				<Route
					path="/dashboard/goals"
					element={
						<PrivateRoute>
							<GoalsOverview />
						</PrivateRoute>
					}
				/>

				<Route
					path="/dashboard/kanban"
					element={
						<PrivateRoute>
							<Kanban />
						</PrivateRoute>
					}
				/>

				<Route
					path="/dashboard/pomodoro"
					element={
						<PrivateRoute>
							<PomodoroSession />
						</PrivateRoute>
					}
				/>

				<Route
					path="/about"
					element={
						<PrivateRoute>
							<AboutUs />
						</PrivateRoute>
					}
				/>

				<Route
					path="/pricing"
					element={
						<PrivateRoute>
							<Pricing />
						</PrivateRoute>
					}
				/>

				<Route
					path="*"
					element={
						<PrivateRoute>
							<NotFoundPage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;

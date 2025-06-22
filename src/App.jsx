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
import Calender from '../src/components/Dashboard/ALLCards/Calender.jsx';
import Kanban from '../src/components/Dashboard/ALLCards/Kanban.jsx';
import PomodoroSession from '../src/components/Dashboard/ALLCards/PomodoroSession.jsx';
import AboutUs from '../src/components/Dashboard/ALLCards/AboutUs.jsx';
import Pricing from '../src/components/Dashboard/ALLCards/Pricing.jsx';
import NotFoundPage from '../src/pages/NotFoundPage.jsx';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<h1>Welcome!</h1>} />
				{/*<Route path="/signup" element={<Signup />} />*/}

				<Route
					path="signup"
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

				<Route path="dashboard/my-profile" element={<MyProfile />} />

				<Route path="/dashboard/progress" element={<TodayProgress />} />

				<Route path="/dashboard/goals" element={<GoalsOverview />} />

				<Route path="/dashboard/calendar" element={<Calender />} />

				<Route path="/dashboard/kanban" element={<Kanban />} />

				<Route path="/dashboard/pomodoro" element={<PomodoroSession />} />

				<Route path="/about" element={<AboutUs />} />

				<Route path="/pricing" element={<Pricing />} />

				<Route path="*" element={<NotFoundPage />} />
				
			</Routes>
		</div>
	);
}

export default App;

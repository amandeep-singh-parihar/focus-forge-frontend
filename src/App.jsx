import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OpenRoute from './components/core/Auth/OpenRoute.jsx';
import Signup from './pages/Signup.jsx';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<h1>Welcome!</h1>} />
			</Routes>
		</div>
	);
}

export default App;

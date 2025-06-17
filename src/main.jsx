import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducer/index.js';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Toaster } from 'react-hot-toast';

const store = configureStore({
	reducer: rootReducer,
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<Toaster></Toaster>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center">
			<div className="text-9xl font-bold">404</div>
			<div className="text-2xl font-bold">Oops!, Page not Found</div>
			<button
				onClick={() => handleGoBack()}
				className="text-xs font-semibold capitalize border-4 p-1 px-4 mt-4 border-black rounded-full"
			>
				Go back
			</button>
		</div>
	);
}

export default NotFoundPage;

import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm.jsx';
import SignUpFrom from './SignUpFrom.jsx';

function Template({ title, formType }) {
	const { loading } = useSelector((state) => state.auth);

	return (
		<div className="h-screen w-full flex items-center justify-center">
			{loading ? (
				<div class="spinner"></div>
			) : (
				<div>{formType == 'signup' ? <SignUpFrom /> : <LoginForm />}</div>
			)}
		</div>
	);
}

export default Template;

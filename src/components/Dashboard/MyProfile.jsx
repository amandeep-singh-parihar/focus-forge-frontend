import React from 'react';
import data from '../Dashboard/data.jsx';
// Assuming you're not using useSelector or useNavigate in this specific component,
// you can safely remove these imports to keep your code cleaner.
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import Greeting from './Greeting.jsx'; // Keep Greeting import
import Card from './ALLCards/Card.jsx';

function MyProfile() {
	// Define an array of objects, where each object contains data
	// describing the type of card and any relevant properties.

	return (
		<div className="myprofile w-full h-screen flex justify-center">
			<div className="w-11/12">
				{/* --- Greeting component retained here --- */}
				<div className="overall">
					<Greeting />
				</div>
				{/* -------------------------------------- */}

				<div className="flex justify-center flex-wrap gap-4 px-36 mb-12 mt-12">
					{data.map((cardItem) => (
						<Card key={cardItem.id} {...cardItem} />
					))}
				</div>
			</div>
		</div>
	);
}

export default MyProfile;

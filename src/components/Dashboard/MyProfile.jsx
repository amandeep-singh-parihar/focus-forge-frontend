import React from 'react';
import data from '../Dashboard/data.jsx';
import Greeting from './Greeting.jsx';
import Card from './ALLCards/Card.jsx';
import Navbar from '../common/Navbar.jsx';

function MyProfile() {
	return (
		<div className="myprofile w-full h-screen flex justify-center">
			<div className="w-11/12">
				<div className="overall">
					<Greeting />
				</div>

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

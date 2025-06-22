import React, { useState, useEffect } from 'react';

function Greeting() {
	const [greeting, setGreeting] = useState('');
	const userName = 'Aman';

	useEffect(() => {
		const updateGreeting = () => {
			const date = new Date();
			const hour = date.getHours();

			if (hour >= 5 && hour < 12) {
				setGreeting('Good Morning');
			} else if (hour >= 12 && hour < 18) {
				setGreeting('Good Afternoon');
			} else {
				setGreeting('Good Evening');
			}
		};

		updateGreeting();

		const intervalId = setInterval(updateGreeting, 60 * 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="Greeting max-h-screen text-[#2f2120] flex justify-between items-center mt-12 bg-[#fefefc] p-12 px-12 rounded-md">
			{/* good afternoon wala box*/}
			<div className=" text-[#2f2120] flex flex-col justify-center gap-12 ">
				<div className="flex flex-col justify-center gap-2 ">
					<div className="text-4xl font-bold capitalize">
						{greeting} {userName}! 👋 {/* Dynamic greeting */}
					</div>
					<div className="text-[#7c6f68] font-bold text-lg">
						Ready to make today productive? You've got 3 tasks pending and 2
						goals to crush! 🚀
					</div>
				</div>

				<div className="flex gap-14">
					<div>current streak</div>
					<div>focus mode</div>
				</div>
			</div>
			<div>profile image</div>
		</div>
	);
}

export default Greeting;

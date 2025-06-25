import React, { useState, useEffect } from 'react';
import quotesData from '../../../src/quotes.json';
import { useSelector } from 'react-redux';

function Greeting() {
	const [greeting, setGreeting] = useState('');
	const [quote, setQuote] = useState({ text: '', author: '' });

	const { user } = useSelector((state) => state.profile);
	const userName = user?.firstName || 'User';
	const userImage =
		user?.image ||
		`https://api.dicebear.com/5.x/initials/svg?seed=${user?.firstName || 'User'} ${user?.lastName || ''}`;

	useEffect(() => {
		const updateGreeting = () => {
			const hour = new Date().getHours();
			if (hour >= 5 && hour < 12) setGreeting('Good Morning');
			else if (hour >= 12 && hour < 18) setGreeting('Good Afternoon');
			else setGreeting('Good Evening');
		};

		updateGreeting();
		const greetingIntervalId = setInterval(updateGreeting, 60000);

		const selectRandomQuote = () => {
			if (Array.isArray(quotesData) && quotesData.length > 0) {
				const randomIndex = Math.floor(Math.random() * quotesData.length);
				const selectedQuote = quotesData[randomIndex];
				setQuote({
					text: selectedQuote.text,
					author: selectedQuote.author || 'Unknown',
				});
			} else {
				setQuote({
					text: 'No motivational quotes found. Please check quotes.json.',
					author: 'Focus Forge',
				});
			}
		};

		selectRandomQuote();

		return () => clearInterval(greetingIntervalId);
	}, []);

	return (
		<div className="Greeting max-h-screen text-[#000000] flex justify-between items-center mt-12 bg-[#FFFFFF] p-12 px-12 rounded-md">
			<div className="text-[#000000] flex flex-col justify-center gap-12">
				<div className="flex flex-col justify-center gap-2">
					<div className="text-4xl font-bold capitalize">
						{greeting}, {userName}! 👋
					</div>
					<div className="text-[#000000] font-bold text-lg mb-4 text-opacity-80">
						{quote.text && (
							<div className="text-md italic">
								"{quote.text}"
								{quote.author && (
									<span className="block text-right text-sm mt-1">
										- {quote.author}
									</span>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* profile image */}
			<div className="ml-4">
				<img
					src={userImage}
					alt="User"
					className="w-40 h-40 rounded-full border-4 border-black shadow-md"
				/>
			</div>
		</div>
	);
}

export default Greeting;

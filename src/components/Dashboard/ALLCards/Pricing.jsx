import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
	const plans = [
		{
			title: 'Free',
			price: '₹0',
			description: 'Perfect for students who want to try the basic features.',
			features: ['Pomodoro Timer', 'Task Manager', 'Daily Summary'],
			cta: 'Start for Free',
			color: 'border-[#EB5E28]',
			disabled: false,
		},
		{
			title: 'Pro',
			price: 'Coming Soon',
			description: 'Ideal for focused learners who want more insights.',
			features: [
				'All Free Features',
				'Goal Tracker',
				'Progress Analytics',
				'Priority Support',
			],
			cta: 'Coming Soon',
			color: 'border-blue-500',
			disabled: true,
		},
		{
			title: 'Premium',
			price: 'Coming Soon',
			description: 'Best for serious students preparing for top exams.',
			features: [
				'All Pro Features',
				'Advanced Stats',
				'Unlimited History',
				'Account Sync',
			],
			cta: 'Coming Soon',
			color: 'border-yellow-500',
			disabled: true,
		},
	];

	const navigate = useNavigate();
	const buttonHandler = (plan) => {
		if (!plan.disabled) {
			navigate('/dashboard/my-profile');
		}
	};

	return (
		<div className="max-w-6xl mx-auto px-6 py-12">
			<h1 className="text-4xl font-bold text-center mb-10 text-[#252422]">
				Pricing Plans
			</h1>
			<div className="grid md:grid-cols-3 gap-8">
				{plans.map((plan, index) => (
					<div
						key={index}
						className={`border-2 ${plan.color} rounded-xl p-6 shadow-md hover:scale-105 transition-transform bg-[#403D39]`}
					>
						<h2 className="text-2xl font-semibold mb-2 text-center text-[#FFFCF2]">
							{plan.title}
						</h2>
						<p className="text-center text-3xl font-bold mb-4 text-[#FFFCF2]">
							{plan.price}
						</p>
						<p className="text-center text-[#FFFCF2] mb-6">
							{plan.description}
						</p>
						<ul className="mb-6 space-y-2 text-sm text-[#FFFCF2]">
							{plan.features.map((feature, idx) => (
								<li key={idx} className="flex items-center gap-2">
									<span className="text-green-500">✓</span>
									{feature}
								</li>
							))}
						</ul>
						<button
							onClick={() => buttonHandler(plan)}
							disabled={plan.disabled}
							className={`block w-full py-2 rounded text-white ${
								plan.disabled
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-[#EB5E28] hover:bg-[#ff6700]'
							}`}
						>
							{plan.cta}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Pricing;

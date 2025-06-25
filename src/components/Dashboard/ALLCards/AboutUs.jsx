import React from 'react';

function AboutUs() {
	return (
		<div className="max-w-4xl mx-auto px-6 py-12 bg-[#30343f] rounded-lg">
			<h1 className="text-4xl font-bold text-center mb-6 text-[#fafaff]">
				About FocusForge
			</h1>
			<p className="text-lg text-[#fafaff] mb-4 text-center">
				FocusForge is a powerful student productivity dashboard designed to help
				you stay focused, track your goals, and make the most of your time.
			</p>
			<div className="mt-8 space-y-6 text-[#fafaff]">
				<p>
					🚀 Our mission is to help students manage their time effectively using
					features like a Pomodoro timer, task manager, goal tracker, and daily
					summary — all in one clean, distraction-free interface.
				</p>
				<p>
					🎯 Whether you're preparing for exams, managing assignments, or just
					trying to build better habits, FocusForge is here to support your
					journey.
				</p>
				<p>
					🛠️ Built using modern web technologies like React, Node.js, Redux, and
					Tailwind CSS, this tool was created with performance and simplicity in
					mind.
				</p>
				<p>
					✨ Stay organized. Stay consistent. Stay focused — with FocusForge.
				</p>
			</div>

			<hr className="my-10" />

			<div className="text-center text-sm text-[#fafaff]">
				Made with ❤️ by{' '}
				<span className="font-semibold text-[#fca311]">
					Amandeep Singh Parihar
				</span>
				<br />
				Check out more projects on{' '}
				<a
					href="https://github.com/amandeep-singh-parihar"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#fca311] underline hover:text-[#FFBA08]"
				>
					GitHub
				</a>
			</div>
		</div>
	);
}

export default AboutUs;

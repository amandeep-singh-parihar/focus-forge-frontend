import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, name, logo, path }) {
	const cardContent = (
		<>
			<div className="text-xl font-semibold text-[#01aad3]">{name}</div>
			<div className="text-5xl mt-2 mb-2 text-[#01aad3]">{logo}</div>
		</>
	);

	const cardClassName =
		'card bg-[#1f1e1f] h-[350px] w-[350px] rounded-md p-3 shadow-xl hover:shadow-2xl ease-linear transition-all border-[0.25px] border-solid overflow-hidden flex flex-col items-center justify-center mb-4 gap-2 hover:border-[#01aad3] hover:border-2  hover:bg-[rgba(1,170,211,0.1)] transition duration-300 hover:scale-105';

	return path ? (
		<Link to={path} className={cardClassName}>
			{cardContent}
		</Link>
	) : (
		<div className={cardClassName}>{cardContent}</div>
	);
}

export default Card;

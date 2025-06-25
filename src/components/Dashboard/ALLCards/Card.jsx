import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, name, logo, path }) {
	const cardContent = (
		<>
			<div className="text-xl font-semibold text-[#000000]">{name}</div>
			<div className="text-5xl mt-2 mb-2 text-[#000000]">{logo}</div>
		</>
	);

	const cardClassName =
		'card bg-[#FFFFFF] h-[350px] w-[350px] rounded-md p-3 shadow-xl hover:shadow-2xl ease-linear transition-all border-2-[#403D39] border-solid overflow-hidden flex flex-col items-center justify-center mb-4 gap-2';

	return path ? (
		<Link to={path} className={cardClassName}>
			{cardContent}
		</Link>
	) : (
		<div className={cardClassName}>{cardContent}</div>
	);
}

export default Card;

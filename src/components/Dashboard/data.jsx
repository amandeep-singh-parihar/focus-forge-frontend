import { GiProgression } from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';
import { BsKanban } from 'react-icons/bs';
import { MdTimer } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdPricetags } from 'react-icons/io';

const data = [
	{
		id: 'todayProgress',
		name: "Today's Progress",
		logo: <GiProgression />,
		path: '/dashboard/progress',
	},
	{
		id: 'goalsOverview',
		name: 'Your Goals',
		logo: <GoGoal />,
		path: '/dashboard/goals',
	},
	{
		id: 'pomodoroSession',
		name: 'Pomodoro Timer',
		logo: <MdTimer />,
		path: '/dashboard/pomodoro',
	},
	{
		id: 'kanban',
		name: 'Task Board',
		logo: <BsKanban />,
		path: '/dashboard/kanban',
	},

	{
		id: 'aboutUs',
		name: 'About Us',
		logo: <IoInformationCircleOutline />,
		path: '/about',
	},
	{
		id: 'pricing',
		name: 'Pricing Plans',
		logo: <IoMdPricetags />,
		path: '/pricing',
	},
];

export default data;

import { v4 as uuidv4 } from 'uuid';
import { User } from '@/types/types';

const exampleUsers: User[] = [
	{
		id: uuidv4(),
		name: 'Tom Peterson',
		email: 'tom.peterson@renewable.com',
		company: 'Renewable Exchange',
		dateAdded: new Date('2023-01-12')
	},
	{
		id: uuidv4(),
		name: 'Michael Otto',
		email: 'michael.otto@acme.io',
		company: 'Acme Inc.',
		dateAdded: new Date('2023-10-05')
	},
	{
		id: uuidv4(),
		name: 'Anita Rodgers',
		email: 'anita.rodgers@globaltech.com',
		company: 'GlobalTech',
		dateAdded: new Date('2024-02-18')
	},
	{
		id: uuidv4(),
		name: 'Amelia Yates',
		email: 'amelia.yates@papersolutions.org',
		company: 'Paper Solutions',
		dateAdded: new Date('2022-07-30')
	},
	{
		id: uuidv4(),
		name: 'James Winston',
		email: 'james.winston@photonics.net',
		company: 'Photonics Ltd.',
		dateAdded: new Date('2025-01-01')
	},
	{
		id: uuidv4(),
		name: 'Diana Smith',
		email: 'diana.smith@globalservices.com',
		company: 'Global Services',
		dateAdded: new Date('2021-05-20')
	},
	{
		id: uuidv4(),
		name: 'Daniel Kim',
		email: 'daniel.kim@techforward.co',
		company: 'TechForward',
		dateAdded: new Date('2024-11-11')
	}
];

export default exampleUsers;

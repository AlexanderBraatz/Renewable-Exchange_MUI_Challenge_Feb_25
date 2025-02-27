'use client';
import React from 'react';
import { useUsersContext } from '@/context/users-context';
import { User } from '@/types/types';

export default function DataTable() {
	const { users, setUsers } = useUsersContext();
	const exampleUser: User = {
		id: 'string',
		name: 'string',
		email: 'string',
		company: 'string',
		dateAdded: new Date()
	};
	function handleClick(newUser: User) {
		setUsers(prevUsers => {
			return [...prevUsers, newUser];
		});
	}

	return (
		<>
			{users.map(user => (
				<p key={user.id}>user.name</p>
			))}
			<button onClick={() => handleClick(exampleUser)}> add User</button>
		</>
	);
}

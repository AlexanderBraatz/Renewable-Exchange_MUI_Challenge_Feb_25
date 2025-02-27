'use client';
import React from 'react';
import { useUsersContext } from '@/context/users-context';
import { User } from '@/types/types';

export default function DataTable() {
	const { users, addNewUser, deleteUserById } = useUsersContext();
	const exampleUser: User = {
		id: '',
		name: 'example',
		email: 'string',
		company: 'string',
		dateAdded: new Date()
	};

	return (
		<>
			{users.map(user => (
				<div key={user.id}>
					<span>{user.name}</span>
					<button onClick={() => deleteUserById(user.id)}>
						delete this User
					</button>
				</div>
			))}
			<button onClick={() => addNewUser(exampleUser)}> add User</button>
		</>
	);
}

'use client';
import React from 'react';
import { useUsersContext } from '@/context/users-context';

export default function UsersCount() {
	const { users } = useUsersContext();
	return (
		<div>
			<span>Total Number of Users: </span>
			<span>{users.length}</span>
		</div>
	);
}

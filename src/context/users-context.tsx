'use client';

import React, { useState, createContext, useContext } from 'react';
import type { User } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';

type UsersContextProps = { children: React.ReactNode };

type UsersContextType = {
	users: User[];
	addNewUser: (newUserData: Omit<User, 'id' | 'dateAdded'>) => void;
	deleteUserById: (deletedUserId: string) => void;
};

const UsersContext = createContext<UsersContextType | null>(null);

export default function UsersContextProvider({ children }: UsersContextProps) {
	const exampleUsers: User[] = [
		{
			id: uuidv4(),
			name: 'tom test',
			email: 'test@email.com',
			company: 'Rentable Exchange',
			dateAdded: new Date()
		},
		{
			id: uuidv4(),
			name: 'mike test',
			email: 'otto@email.com',
			company: 'Rentable Ex',
			dateAdded: new Date()
		}
	];
	// const [users, setUsers] = useState<User[]>([]);
	const [users, setUsers] = useState<User[]>([...exampleUsers]);

	// Add a new user and giving them an id and dateAdded
	function addNewUser(newUserData: Omit<User, 'id' | 'dateAdded'>) {
		const newUserWithId = {
			...newUserData,
			id: uuidv4(),
			dateAdded: new Date()
		};
		setUsers(prevUsers => {
			return [...prevUsers, newUserWithId];
		});
	}

	//Delete a user by filtering them out of users using their id
	function deleteUserById(deletedUserId: string) {
		setUsers(prevUsers => prevUsers.filter(user => user.id !== deletedUserId));
	}

	return (
		<UsersContext.Provider
			value={{
				users,
				addNewUser,
				deleteUserById
			}}
		>
			{children}
		</UsersContext.Provider>
	);
}

export function useUsersContext() {
	const context = useContext(UsersContext);

	if (context === null) {
		throw new Error(
			'useUsersContext must be used within an UseUsersContextProvider'
		);
	}
	return context;
}

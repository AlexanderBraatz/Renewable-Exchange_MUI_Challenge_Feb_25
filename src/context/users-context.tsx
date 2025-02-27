'use client';

import React, { useState, createContext, useContext } from 'react';
import type { User } from '@/types/types';

type UsersContextProps = { children: React.ReactNode };

type UsersContextType = {
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UsersContext = createContext<UsersContextType | null>(null);

export default function UsersContextProvider({ children }: UsersContextProps) {
	const [users, setUsers] = useState<User[]>([]);

	return (
		<UsersContext.Provider
			value={{
				users,
				setUsers
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

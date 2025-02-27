'use client';
import React from 'react';
import { useUsersContext } from '@/context/users-context';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

export default function UsersCount() {
	const { users } = useUsersContext();

	return (
		<Card sx={{ maxWidth: 300, margin: '16px 0' }}>
			<CardContent>
				<Typography
					variant="h6"
					component="div"
					gutterBottom
				>
					Total Number of Users
				</Typography>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{ mt: 2 }}
				>
					<PeopleIcon sx={{ mr: 1, color: 'primary.main' }} />
					<Typography
						variant="h4"
						component="div"
						fontWeight="bold"
					>
						{users.length}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}

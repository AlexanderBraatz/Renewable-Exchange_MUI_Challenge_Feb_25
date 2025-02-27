'use client';
import React from 'react';
import { useUsersContext } from '@/context/users-context';
import { User } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Card, CardContent } from '@mui/material';
import FormDialogueButton from './form-dialogue';

export default function DataTable() {
	const { users, addExampleUsers, deleteUserById } = useUsersContext();

	// Example user to add (just for testing)
	const exampleUser: User = {
		id: uuidv4(),
		name: 'Benjamin Fisherman',
		email: 'benjamine-fisherman@gmail.com',
		company: 'Ben`s fish',
		dateAdded: new Date()
	};

	// Prepare rows from context
	const rows: GridRowsProp = [...users];

	// Define columns
	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'Name', width: 160 },
		{ field: 'email', headerName: 'Email', width: 240 },
		{ field: 'company', headerName: 'Company', width: 160 },
		{
			field: 'dateAdded',
			headerName: 'Date added',
			width: 160,
			renderCell: params =>
				moment(params.row.dateAdded).format('YYYY/MM/DD (HH:MM)')
		},
		{
			field: 'action',
			headerName: 'Action',
			sortable: false,
			filterable: false,
			width: 110,
			renderCell: params => {
				const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
					e.stopPropagation(); // don't select this row after clicking
					deleteUserById(params.row.id);
				};
				return (
					<Button
						sx={{ width: '100%' }}
						variant="contained"
						onClick={onClick}
					>
						Delete
					</Button>
				);
			}
		}
	];
	return (
		<>
			<Card sx={{ width: 870, m: '16px auto' }}>
				<CardContent>
					<Box sx={{ height: 400, width: '100%' }}>
						<DataGrid
							rows={rows}
							columns={columns}
							sx={{
								// Removes the vertical header separators if desired
								'& .MuiDataGrid-columnSeparator': {
									display: 'none'
								}
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							gap: 1, // Adds spacing between buttons
							mt: 2
						}}
					>
						<Button
							variant="text"
							onClick={() => addExampleUsers()}
						>
							Examples
						</Button>
						<FormDialogueButton />
					</Box>
				</CardContent>
			</Card>
		</>
	);
}

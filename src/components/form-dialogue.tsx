'use client';

import React, { useState } from 'react';
import { useUsersContext } from '@/context/users-context';
import { User } from '@/types/types';

// React Hook Form MUI imports

import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

// Material UI imports
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Box
} from '@mui/material';

export default function FormDialogueButton() {
	const { addNewUser } = useUsersContext();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleFormSubmit = (newUserData: Omit<User, 'id' | 'dateAdded'>) => {
		addNewUser(newUserData);
		handleClose();
	};

	return (
		<div>
			<Button
				variant="contained"
				onClick={handleClickOpen}
			>
				Add User
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth="sm"
			>
				<DialogTitle>Add a New User</DialogTitle>
				<FormContainer onSuccess={handleFormSubmit}>
					<DialogContent>
						<Box>
							{/* @ts-ignore */}
							<TextFieldElement
								name="name"
								label="Name"
								required
								fullWidth
								margin="normal"
							/>
							{/* @ts-ignore */}
							<TextFieldElement
								type="email"
								name="email"
								label="Email"
								required
								fullWidth
								margin="normal"
							/>
							{/* @ts-ignore */}
							<TextFieldElement
								name="company"
								label="Company"
								required
								fullWidth
								margin="normal"
							/>
						</Box>
					</DialogContent>

					<DialogActions>
						<Button
							onClick={handleClose}
							variant="text"
						>
							Cancel
						</Button>
						<Button
							type="submit"
							variant="contained"
						>
							Submit
						</Button>
					</DialogActions>
				</FormContainer>
			</Dialog>
		</div>
	);
}

import DataTable from '@/components/data-table';
import UsersCount from '@/components/users-count';
import { Box, Typography } from '@mui/material';

export default function Home() {
	return (
		<div>
			<main>
				<Box
					sx={{
						flexDirection: 'column',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: '100vh'
					}}
				>
					<Typography
						variant="h3"
						sx={{ fontWeight: 'bold', mb: 2 }}
					>
						Table of Users
					</Typography>

					<DataTable />
					<UsersCount />
				</Box>
			</main>
			<footer></footer>
		</div>
	);
}

import DataTable from '@/components/data-table';
import UsersCount from '@/components/users-count';

export default function Home() {
	return (
		<div>
			<main>
				<DataTable />
				<UsersCount />
			</main>
			<footer></footer>
		</div>
	);
}

export interface User {
	id: string;
	name: string;
	email: string;
	company: string;
	dateAdded: Date; // see how to sort correctly https://github.com/mui/mui-x/issues/13299
}

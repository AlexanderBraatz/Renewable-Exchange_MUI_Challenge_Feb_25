import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'; //new  official Material UI integration with Next.js. For the full documentation, visit Next.js integration page.
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import UsersContext from '@/context/users-context';

export const metadata: Metadata = {
	title: 'Alex B.| Renewable.exchange',
	description:
		'This is a coding challenge I completed for a position as React(Next.js) Developer at Renewable Exchange.'
};

//MUI font integration
const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto'
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.variable}>
				<AppRouterCacheProvider>
					<UsersContext>
						<ThemeProvider theme={theme}>{children}</ThemeProvider>
					</UsersContext>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

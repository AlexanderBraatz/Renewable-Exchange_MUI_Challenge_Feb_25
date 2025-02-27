'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	cssVariables: true, // enables use of CSS variables
	typography: {
		fontFamily: 'var(--font-roboto)'
	}
});

export default theme;

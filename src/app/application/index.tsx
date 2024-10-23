import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Container } from './fragments/container';

export const Application = () => {
    return (
    <ThemeProvider theme={theme}>
        <Container />
    </ThemeProvider>)
}
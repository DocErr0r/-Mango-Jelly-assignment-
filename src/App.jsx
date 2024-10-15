import { createTheme, ThemeProvider } from '@mui/material';
import ChatUI from './pages/ChatUI';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#ff5722',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ChatUI />
        </ThemeProvider>
    );
}

export default App;

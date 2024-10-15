import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ChatWindow from '../components/messageWindow';
import MessageInput from '../components/messageInput';

const ChatUI = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Chat Application
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, overflow: 'auto', height: '100%' }}>
                <ChatWindow />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MessageInput />
                </Box>
            </Box>
        </Box>
    );
};

export default ChatUI;

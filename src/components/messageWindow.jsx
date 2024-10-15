import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box, Typography } from '@mui/material';

const ChatWindow = () => {
    const messages = useSelector((state) => state.chat.messages);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    // console.log(messages);

    return (
        <Paper
            elevation={3}
            sx={{ flex: 1, p: 2, overflowY: 'auto' }} 
        >
            {messages.map((message, index) => (
                <Box key={index} sx={{ my: 1 }}>
                    <Typography variant="subtitle2" sx={{ color: message.sender.name === 'You' ? 'blue' : 'green' }}>
                        {message.sender.name} at {message.timestamp}
                    </Typography>
                    <Typography variant="body1">{message.text}</Typography>
                </Box>
            ))}
            <div ref={chatEndRef} />
        </Paper>
    );
};

export default ChatWindow;

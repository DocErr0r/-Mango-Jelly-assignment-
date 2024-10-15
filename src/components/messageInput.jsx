import React, { useState, useTransition } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button, Alert } from '@mui/material';
import { receiveMessage, sendMessage } from '../store/chatSlice';

const MessageInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [isPending, startTransition] = useTransition();
    const dispatch = useDispatch();

    const handleSendMessage = () => {
        if (!inputValue.trim()) {
            setError(true);
            return;
        }

        setError(false);
        dispatch(sendMessage({ text: inputValue }));

        // Simulate receiving a message after a 2-second delay
        setTimeout(() => {
            dispatch(receiveMessage({ text: 'Simulated response from John', sender: { id: 3, name: 'John' } }));
        }, 2000);

        startTransition(() => setInputValue(''));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 1 }}>
            {error && <Alert severity="error">Message cannot be empty!</Alert>}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField fullWidth variant="outlined" placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={isPending} />
                <Button variant="contained" color="primary" sx={{ ml: 1,py:2}} onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default MessageInput;

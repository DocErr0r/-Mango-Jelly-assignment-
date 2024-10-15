import { createSlice, nanoid } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        currentUser: { id: 1, name: 'You' },
        messages: [
            { id: nanoid(), text: 'Welcome to the chat!', sender: { name: 'John', id: 3 }, timestamp: new Date().toLocaleTimeString() }
        ],
    },
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push({
                id: nanoid(),
                text: action.payload.text,
                sender: state.currentUser,
                timestamp: new Date().toLocaleTimeString(),
            });
        },
        receiveMessage: (state, action) => {
            state.messages.push({
                id: nanoid(),
                text: action.payload.text,
                sender: action.payload.sender,
                timestamp: new Date().toLocaleTimeString(),
            });
        },
    },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;

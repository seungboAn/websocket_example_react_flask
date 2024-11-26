import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('message', (msg) => {
            setMessages((prevMessages): any => [...prevMessages, msg]);
        });

        return () => {
            socket.off('message');
        //     socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (messageInput) {
            socket.send(messageInput);
            setMessageInput('');
        }
    };

    return (
        <div>
            <h1>WebSocket Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input 
                type="text" 
                value={messageInput} 
                onChange={(e) => setMessageInput(e.target.value)} 
                placeholder="Type a message..." 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
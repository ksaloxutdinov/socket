import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('New user connected');

    ws.on('message', (message) => {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.send('Welcome to the chat');
});
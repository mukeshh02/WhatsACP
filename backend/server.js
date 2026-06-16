require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { initializeWhatsApp, getCurrentStatus } = require('./services/whatsapp');

// Prevent crashes due to async library errors (like EBUSY unlinking locked browser session files)
process.on('uncaughtException', (err) => {
    console.error('[Warning] Uncaught Exception:', err.message || err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[Warning] Unhandled Rejection at:', promise, 'reason:', reason);
});


const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

// Initialize WhatsApp Client Engine and pass socket instance
initializeWhatsApp(io);

app.get('/', (req, res) => {
    res.send('WhatsACP CRM Backend is running! WebSockets enabled.');
});

app.get('/api/status', (req, res) => {
    res.json({ status: getCurrentStatus() });
});

server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

import { io } from 'index';

// io.on('connection', (socket) => {
//   console.log(socket.id);
// });
io.emit('hi', 'this is from server');

const express = require('express');
const app = express()

const bodyParser = require('body-parser');
const { nanoid } = require('nanoid')
const cors = require('cors');
const http = require('http');

const server = http.createServer(app)
const { Server } =  require('socket.io');
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

// server config
var port = 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// endpoints

app.use('/', (req, res) => {    
  res.send('test');
});

io.on('connection', (socket) => {
    console.log(`user ${socket.id} has connected`);

    var roomID = nanoid(6)
    socket.emit('UID', roomID)

    socket.on('create', async (data) => {
        console.log(`${socket.id} is creating lobby_${roomID}`);
        socket.data.username = data.name;
        socket.data.id = socket.id
        socket.data.role = data.role

        socket.join(roomID)

        var allData = []
        var roomClients = await io.in(roomID).fetchSockets()
        roomClients.forEach((s, index) => {
           allData.push(s.data);
        })

        console.log(allData);
        socket.emit('userData', allData);
    })

    socket.on('join', async (data) => {
        socket.data.username = data.name
        socket.data.id = socket.id
        socket.data.role = data.role
        
        socket.join(data.id)
        if (socket.rooms.has(data.id)) {
            console.log(`user ${socket.id} has joined in room ${data.id}`);
            console.table(socket.adapter.rooms);

            var allData = []
            var roomClients = await io.in(data.id).fetchSockets()
            roomClients.forEach((s, index) => {
                allData.push(s.data);
            })

            console.log(allData);
            io.sockets.emit('userData', allData);
        }
    });

    socket.on('answered', (data) => {
        socket.data.score = data.score
    })

    socket.on('disconnect', async () => {
        console.log(`user ${socket.id} has disconnected`);
        socket.leave(roomID)

        var allData = []
        var roomClients = await io.in(socket.data.id).fetchSockets()
        roomClients.forEach((s, index) => {
            allData.push(s.data);
        })

        io.sockets.emit('userData', allData)
    });
});

server.listen(port, () => {
    console.log("Server listening at port: %d", port);
});
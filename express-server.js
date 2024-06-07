import express from 'express';
import roomRouter from './Routers/rooms.js';
import customerRouter from './Routers/customer.js';



const server = express();
server.use(express.json()); // middles to json


//router
server.use('/room', roomRouter);
server.use('/customers', customerRouter);

// hosting 
server.listen(8000,()=>{console.log('server working')});


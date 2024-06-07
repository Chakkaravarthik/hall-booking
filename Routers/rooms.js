import express from 'express';
import { rooms, customers } from '../localvariables.js';

const roomRouter = express.Router();


// hall data





roomRouter.get('/',(req,res)=>{
    res.send({rooms})
})


// creating a room api

roomRouter.post('/',(req,res)=>{
    const {body}=req;
    rooms.push({id:Date.now().toString(),bookinginfo:[],isBooked:false,...body})
    res.send({msg:'room created'})
})

//Booking a room api also includes customer booking data and rooms booking data

roomRouter.post('/bookroom/:roomId',(req,res)=>{
    const {body}=req;
    const {roomId}=req.params;
    const {customerId}=body;
    console.log(rooms);
    const roomIndex = rooms.findIndex(r => r.id === roomId);
    const roomobj = rooms.find(r => r.id===roomId);
    console.log(roomIndex, roomobj);
    const customerindex = customers.findIndex(c=>c.id===customerId);
    const customerobj = customers.find(c=>c.id===customerId);
   
    if(roomobj && customerobj){
        rooms[roomIndex].bookinginfo.push({bookingId:Date.now().toString(),...body});
        rooms[roomIndex].isBooked=true;
        customers[customerindex].roomid=roomId;
        res.send({msg:'created sucess'});
    }else{
        res.send({msg:'not saved'})
    }
    
})


export default roomRouter;
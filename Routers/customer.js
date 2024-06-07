import express from 'express';
import { customers, rooms } from '../localvariables.js';

const customerRouter = express.Router();


//customer GET api

customerRouter.get('/',(req,res)=>{
    res.send(customers);
})

customerRouter.post('/',(req,res)=>{
    const {body}=req;
    customers.push({id:Date.now().toString(),...body,roomid:null})
    res.send({msg:'customer created'})
})


export default customerRouter;
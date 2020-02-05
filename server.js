import express from 'express';
import config from './config';
import apiRouter from './api';
//import fs from 'fs';


const server = express();

server.set('view engine','ejs');
server.listen(config.port,()=>{
	console.info("express is listening to the",config.port);
});
server.get('/',(req,res)=>{
	res.send("hello");
});

server.use(express.static('public'));
server.use('/api',apiRouter);
server.get('/about.html',(req,res)=>{
	res.send("about html");
});
 import express from 'express';
import mongoose from 'mongoose';

import indexRouter from './routes/indexRoutes'
import gameRouter from './routes/gameRoutes'
import devRouter from './routes/devRoutes'

class Server{
  
  public app : express.Application;
  
  constructor(){
    this.app = express();
    this.config();
    this.route();
  }
  
  config(){
    const MONGO_URI = 'mongodb://localhost:27017/testDB';
    mongoose.connect(MONGO_URI,{}).then(db => console.log('db is connected'));

    this.app.set('port',process.env.PORT || 3000);
    
    this.app.use(express.json());

  }
  
  route(){
    this.app.use(indexRouter);
    this.app.use('/dev',devRouter);
    this.app.use('/game',gameRouter);
  }
  
  start(){
    this.app.listen(this.app.get('port'));
    console.log('server on port',this.app.get('port'));
  }
}

const server = new Server();
server.start();
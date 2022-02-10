import express from 'express';
import mongoose from 'mongoose';

import config from './config/config';
import indexRouter from './routes/indexRoutes'
import attendanceRouter from './routes/attendanceRoutes'


class Server{
  
  public app : express.Application;
  
  constructor(){
    this.app = express();
    this.config();
    this.route();
  }
  
  config(){
    const MONGO_URI = config.DB_TYPE +'://'+ config.DB_HOST +':'+ config.DB_PORT +'/'+ config.DB_NAME;
    mongoose.connect(MONGO_URI,{}).then(db => console.log('db is connected'));
    
    this.app.set('port',process.env.PORT || 3000);
    this.app.use(express.json());
  }
  
  route(){
    this.app.use(indexRouter);
    this.app.use('/attendance',attendanceRouter);
  }
  
  start(){
    this.app.listen(this.app.get('port'));
    console.log('server on port',this.app.get('port'));
  }
}

const server = new Server();
server.start();
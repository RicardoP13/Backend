import express from 'express';
import mongoose from 'mongoose';

import indexRouter from './routes/indexRoutes'
import gameRouter from './routes/gameRoutes'

class Server{
  public app : express.Application;
  constructor(){
    this.app = express();
    this.config();
    this.route();
  }

  config(){
    const MONGO_URI = 'mongodb://localhost:27017/testDB';
    //mongoose.set('useFindAndModify',true);
    mongoose.connect(MONGO_URI,{
      /*useNewUrlParser: true,
      useCreateIndex: true
      */
    }).then(db => console.log('db is connected'));
    //Settings
    this.app.set('port',process.env.PORT || 3000);
    
    //Middlewares
    this.app.use(express.json());

  }
  route(){
    this.app.use(indexRouter);
    this.app.use('/api',gameRouter);
  }
  start(){
    this.app.listen(this.app.get('port'));
    console.log('server on port',this.app.get('port'));
  }
}
const server = new Server();
server.start();
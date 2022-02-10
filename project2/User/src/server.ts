import express from 'express';

import indexRouter from './routes/indexRoutes'
import userRouter from './routes/userRoutes'


class Server{
  
  public app : express.Application;
  
  constructor(){
    this.app = express();
    this.config();
    this.route();
  }
  
  config(){
    this.app.set('port',process.env.PORT || 3001);
    this.app.use(express.json());
  }
  
  route(){
    this.app.use(indexRouter);
    this.app.use('/users',userRouter);
  }
  
  start(){
    this.app.listen(this.app.get('port'));
    console.log('server on port',this.app.get('port'));
  }
}

const server = new Server();
server.start();
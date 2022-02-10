import {Request,Response,Router} from 'express';

class IndexRoutes{
  public router : Router;
  constructor(){
    this.router = Router();
    this.routes();
  }
  routes(){
    this.router.get('/',(req,res) => res.send('Index Page'));
  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
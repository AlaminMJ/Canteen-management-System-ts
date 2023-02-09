import { Controller } from '../../utils/controller.interface';
import { Router } from 'express';
class Post implements Controller {
  public path: string;
  public router: Router;
  constructor() {
    this.path = 'post';
    this.router = Router();
  }
}
export default Post;

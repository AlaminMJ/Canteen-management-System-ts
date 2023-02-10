import Post from './post.interface';
import postModel from './post.model';
class PostService {
    public post = postModel;

    public async create(title: string, body: string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body });
            return post;
        } catch (error: any) {
            throw new error();
        }
    }
}
export default PostService;

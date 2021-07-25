
import Post from "../Models/Post.js";
export const getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    if(!posts || posts.length === 0){
        const error = new Error('No posts found');
        throw error;
    }
    res.status(200).json({
        message: 'Posts Found',
        posts
    });

}
export const getPostByUser = async (req, res) => {
    console.log(req.user);
    res.send();
}
export const getPostByOthers = async (req, res) => {
    console.log(req.params.id);
    res.send();
}
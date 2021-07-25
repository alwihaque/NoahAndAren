/*
    1) Get All Posts
    2) Create a post
    3) Display all posts
    4) Arrange my tags
    5) Update a post
    6) Delete a post
    7) Get one post
 */

import {Router} from 'express';
import {isAuth} from "../Middleware/isAuth.js";
import tryCatch from '../Middleware/tryCatch.js';
import {getAllPosts, getPostByOthers, getPostByUser} from "../Controllers/posts.js";

const router = Router();

router.get('/', isAuth,tryCatch(getAllPosts));
router.get('/profile/postByMe', isAuth, tryCatch(getPostByUser));
router.get('/:id', isAuth, tryCatch(getPostByOthers));

export default router;
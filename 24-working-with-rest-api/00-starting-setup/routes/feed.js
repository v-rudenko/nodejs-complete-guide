import { Router } from "express";

import { createPost, getPosts } from '../controllers/feed';

const router = Router();

router.get('/posts', getPosts);

router.post('/posts', createPost);

export default router;
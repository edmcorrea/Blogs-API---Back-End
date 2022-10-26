const express = require('express');
// const authMiddleware = require('../middlewares/auth.middleware');
// const authRouter = require('./auth.router');
// const categoriesRouter = require('./categories.router');
// const postRouter = require('./post.router');
// const userRouter = require('./user.router');
const authRouter = require('./auth.router');

const routers = express.Router();
// routers.use(authMiddleware.validateToken);

routers.use('/login', authRouter);

// routers.use('/categories', categoriesRouter);
// routers.use('/user', userRouter);
// routers.use('/post', postRouter);

module.exports = routers;
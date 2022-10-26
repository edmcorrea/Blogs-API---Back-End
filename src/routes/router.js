const express = require('express');
// const authMiddleware = require('../middlewares/auth.middleware');
// const authRouter = require('./auth.router');
// const categoriesRouter = require('./categories.router');
// const postRouter = require('./post.router');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const { validateLogin } = require('../midlleware/validateLogin');

const routers = express.Router();
// routers.use(authMiddleware.validateToken);

routers.use('/login', validateLogin, authRouter);

routers.use('/user', userRouter);
// routers.use('/categories', categoriesRouter);
// routers.use('/post', postRouter);

module.exports = routers;
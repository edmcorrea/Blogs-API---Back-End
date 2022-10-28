const { postService } = require('../services');
const { decodedToken } = require('../utils/JWT');

const getPosts = async (_req, res) => {
 const posts = await postService.getPosts();
 return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const data = await postService.findById(id);

  if (!data) return res.status(404).json({ message: 'Post does not exist' });
  
  return res.status(200).json(data);
};

const updateById = async (req, res) => {
  const { authorization } = req.headers;

  const decodedId = decodedToken(authorization);
  const { id } = req.params;

  const checked = await postService.checkUserPost(id, decodedId);
   if (!checked) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const { type, message } = await postService.updateById(req.body, id);

  if (type) {
    return res.status(400).json({ message });
  }

  const data = await postService.findById(id);

  return res.status(200).json(data);
};

// const createPost = async (req, res) => {
//   const { type, message } = await postService.createPost(req.body);

//   if (type === 'ALREADY_EXISTS') {
//     return res.status(409).json({ message });
//   }
//   return res.status(201).json({ token: message });
//  };

module.exports = {
  getPosts,
  findById,
  updateById,
  // createPost,
};
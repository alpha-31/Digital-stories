const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comments');
const { authenticate, authorize } = require('../middlewares/auth');

router.post('/', authenticate, authorize, CommentController.postComment);
router.get('/', authenticate, CommentController.getAllComments);
router.get('/:id', authenticate, CommentController.getComment);
router.put('/:id', authenticate, authorize, CommentController.updateComment);
router.delete('/:id', authenticate, authorize, CommentController.deleteComment);

module.exports = router;

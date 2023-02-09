const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/stories');

router.post('/', storiesController.createStory);
router.get('/', storiesController.getStories);
router.get('/:id', storiesController.getStory);
router.put('/:id', storiesController.updateStory);
router.delete('/:id', storiesController.deleteStory);

module.exports = router;

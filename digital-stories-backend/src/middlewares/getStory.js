
async function getStory(req, res, next) {
    try {
      const story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).json({ message: 'Story not found' });
      }
      req.story = story;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

module.exports = getStory;
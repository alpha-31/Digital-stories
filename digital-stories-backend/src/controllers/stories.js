const Story = require('../models/Story');


exports.createStory =  async (req, res) => {
  try {
    // create a new story
    const story = new Story(req.body);
    await story.save();
    res.send(story);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStories = async (req, res) => {
  try {
    // fetch all stories
    const stories = await Story.find();
    res.send(stories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getStory = async (req, res) => {
  try {
    // fetch a single story
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).send('Story not found');
    }
    res.send(story);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateStory = async (req, res) => {
    try {
    // update a story
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    });
    if (!story) {
    return res.status(404).send('Story not found');
    }
    res.send(story);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.deleteStory = async (req, res) => {
  try {
    // delete a story
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).send("Story not found");
    }
    res.send(story);
  } catch (error) {
    res.status(500).send(error);
  }
};

    
    
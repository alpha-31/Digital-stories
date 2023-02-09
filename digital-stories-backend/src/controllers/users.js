
// controller for login and register
// Path: src\controllers\users.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.logout = async (req, res) => {

    const token = req.headers.authorization.split(' ')[1];

    try {
        await jwt.verify(token, process.env.JWT_SECRET);

        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
    try {
        res.status(200).json({ message: 'Logged out' });
    } catch (error) {
        res.status(500).json(error);
    }
    };
}

//upvote a story 
exports.upvote = async (req, res) => {
    const { storyId } = req.params;

    try {
        const story = await Story.findById(storyId);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        } 
        const user = await User.findById(story.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (story.upvotedStories.includes(user._id)) {
            return res.status(400).json({ message: 'You have already upvoted this story' });
        } 
        story.upvotedStories.push(user._id);

        await story.save();
        
        res.status(200).json(story);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

//downvote a story

exports.downvote = async (req, res) => {
    const { storyId } = req.params;

    try {
        const story = await Story.findById(storyId);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        } 
        const user = await User.findById(story.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!story.upvotedStories.includes(user._id)) {
            return res.status(400).json({ message: 'You have not upvoted this story' });
        }

        story.upvotedStories.pull(user._id);

        await story.save();
        
        res.status(200).json(story);
        
    } catch (error) {
        res.status(500).json(error);
    }

}





    







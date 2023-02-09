const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    upvotedStories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }],
    downvotedStories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// validation using joi 
    
function ValidateStory () {

}

module.exports = ValidateStory;
module.exports = mongoose.model('User', UserSchema);

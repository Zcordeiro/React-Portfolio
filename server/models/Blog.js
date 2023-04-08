const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;
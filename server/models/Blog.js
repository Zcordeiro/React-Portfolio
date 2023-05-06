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

const blogResolvers = {
    blogs: async () => {
        return await Blog.find({});
    },
    singleBlog: async (parent, { _id }) => {
        return await Blog.findById(_id);
    },
    addBlog: async (parent, args) => {
        const blog = await Blog.create(args);
        return blog;
    },
    updateBlog: async (parent, args) => {
        const blog = await Blog.findByIdAndUpdate(
            { _id: args._id },
            {   title: args.title,
                description: args.description,
                image: args.image,
                content: args.content
            },
            { new: true }
        );
        return blog;
    },
    deleteBlog: async (parent, args) => {
        const blog = await Blog.findByIdAndDelete(
            { _id: args._id }
        );
        return blog;
    }
};

module.exports = {Blog, blogResolvers};
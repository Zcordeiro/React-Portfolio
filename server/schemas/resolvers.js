const { Project, Blog } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({});
        },

        blogs: async () => {
            return await Blog.find({});
        }
    },

    Mutation: {
        addProject: async (parent, args) => {
            const project = await Project.create(args);
            return project;
        },
        addBlog: async (parent, args) => {
            const blog = await Blog.create(args);
            return blog;
        }
    }
};



module.exports = resolvers;

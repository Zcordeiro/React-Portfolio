const { Project, Blog } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({});
        },

        blogs: async () => {
            return await Blog.find({});
        }
    }
};

module.exports = resolvers;

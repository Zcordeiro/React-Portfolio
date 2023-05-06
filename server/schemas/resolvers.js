const { Project, projectResolvers, Blog, blogResolvers } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return await projectResolvers.projects();
        },
        singleProject: async (parent, { _id }) => {
            return await projectResolvers.singleProject(parent, { _id });
        },
        blogs: async () => {
            return await blogResolvers.blogs();
        },
        singleBlog: async (parent, { _id }) => {
            return await blogResolvers.singleBlog(parent, { _id });
        }
    },

    Mutation: {
        addProject: async (parent, args) => {
            return await projectResolvers.addProject(parent, args);
        },
        updateProject: async (parent, args) => {
            return await projectResolvers.updateProject(parent, args);
        },
        deleteProject: async (parent, args) => {
            return await projectResolvers.deleteProject(parent, args);
        },
        addBlog: async (parent, args) => {
            return await blogResolvers.addBlog(parent, args);
        },
        updateBlog: async (parent, args) => {
            return await blogResolvers.updateBlog(parent, args);
        },
        deleteBlog: async (parent, args) => {
            return await blogResolvers.deleteBlog(parent, args);
        }
    }
};



module.exports = resolvers;

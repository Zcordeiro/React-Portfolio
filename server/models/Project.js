const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    deployed: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    },
});

const Project = model('Project', projectSchema);

const projectResolvers = {
    projects: async () => {
        return await Project.find({});
    },
    singleProject: async (parent, { _id }) => {
        return await Project.findById(_id);
    },
    addProject: async (parent, args) => {
        const project = await Project.create(args);
        return project;
    },
    updateProject: async (parent, args) => {
        const project = await Project.findByIdAndUpdate(
            { _id: args._id },
            {   title: args.title,
                description: args.description,
                image: args.image,
                github: args.github,
                deployed: args.deployed,
                technologies: args.technologies
            },
            { new: true }
        );
        return project;
    },
    deleteProject: async (parent, args) => {
        const project = await Project.findByIdAndDelete(
            { _id: args._id }
        );
        return project;
    },
};


module.exports = {Project, projectResolvers};


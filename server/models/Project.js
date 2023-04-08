const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    name: {
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

module.exports = Project;
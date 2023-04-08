const { Project } = require('../models');

module.exports = {
    async getAllProjects(req, res) {
        try {
            const projects = await Project.find({});
            res.json(projects);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    async getProjectById(req, res) {
        try {
            const project = await Project.findById(req.params.id);
            res.json(project);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};
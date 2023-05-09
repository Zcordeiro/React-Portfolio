const db = require('../config/connection');
const { Project, projectResolvers } = require('../models');

const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
    try {
        await Project.deleteMany({});

        console.log('all done!');
        process.exit(0);

        for(let i = 0; i < projectSeeds.length; i++) {
            const { title, description, image, github, deployed, technologies } = projectSeeds[i];
            const project = await Project.create({ title, description, image, github, deployed, technologies });
            console.log(project);
        }

    } catch (err) {
        throw err;
    }

});


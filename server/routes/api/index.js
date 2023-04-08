const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/projects', projectRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
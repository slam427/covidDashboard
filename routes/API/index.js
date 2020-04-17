const router = require('express').Router();
const nytimesRoutes = require ('./nyTimes.js');
const covidTrackerRoutes = require ('./covidTracker.js')

router.use('/nytimes', nytimesRoutes);
router.use('/covidtracker', covidTrackerRoutes);
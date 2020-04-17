const axios = require ('axios');
const router = require('express').Router();
const URL = 'https:wwww.covidtracking.com/api/';

const currentStateAPI = 'v1/states/current.json';
const historicalStateAPI = 'v1/states/daily.json';
const stateResourcesAPI = 'v1/states/info.json';
const stateWebsiteImage = 'screenshots';

router.route('/').get(function (req, res) {
    console.log('myRequest',req);
    axios.get(URL).then(stateData => {
        console.log(res);
        res.json(stateData);
    });
})


module.exports = router;

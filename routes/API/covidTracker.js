const axios = require ('axios');
const router = require('express').Router();
const URL = 'https:wwww.covidtracking.com/api/v1/states';

const currentStateAPI = 'states/current.json';
const historicalStateAPI = 'states/daily.json';
const stateResourcesAPI = 'states/info.json';

router.route('/').get(function (req, res) {
    console.log('myRequest',req);
    axios.get(URL, req.params).then(covidData => {
        console.log(covidData);
        res.json(covidData);
    });
})


module.exports = router;

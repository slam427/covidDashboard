const axios = require ('axios');
const router = require('express').Router();
const URL = ''


router.route('/').get(function (req, res) {
    console.log('myRequest',req);
    axios.get(URL, req.params).then(bookResults => {
        console.log(bookResults);
        res.json(bookResults);
    });
})


module.exports = router;

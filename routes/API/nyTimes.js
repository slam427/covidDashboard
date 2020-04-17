const axios = require('axios');
const router = require('express').Router();
const myAPI = 'dvUjz1rumQzMr9KIcUWGfkgRJsjSAi8y'
const URL = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=' + myAPI;

router.route('/allnews').get(function (req, resp) {
        axios.get(URL).then(res => {
            console.log("route hit");
            const info = res.data.response.docs.filter(docs => {
                return docs.web_url && docs.pub_date && docs.headline.main && docs.snippet && docs._id;
            }).map((docs) => {
                const article = {
                    articleID: docs._id,
                    headline: docs.headline.main,
                    snippet: docs.snippet,
                    date: docs.pub_date,
                    viewLink: docs.web_url
                };
                return article;
            })
            resp.json(info);
        })
})


module.exports = router;
//https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=dvUjz1rumQzMr9KIcUWGfkgRJsjSAi8y
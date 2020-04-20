const axios = require('axios');
const router = require('express').Router();
const dotenv = require('dotenv');

dotenv.config();

//tried to use process.env but did not work for api key
const nytAPI = process.env.NYT_API;
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200401&end_date=20200419&facet_fields=section_name&fq=U.S.&q=covid-19%2C%20covid19%2C%20coronavirus&sort=newest&api-key=' + nytAPI;


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
            resp.end;
        })
})


module.exports = router;
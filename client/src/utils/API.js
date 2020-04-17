import axios from 'axios';

export default {
    getAllNews: function () {
        return axios.get("/api/nytimes/allnews")
    },

}


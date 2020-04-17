import axios from 'axios';

// nytimesapi - dvUjz1rumQzMr9KIcUWGfkgRJsjSAi8y

export default {
    getAllNews: function () {
        return axios.get("/api/nytimes/allnews")
    },

}


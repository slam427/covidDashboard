const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new mongoose.Schema({
    stateID: {
        type: String,
    },
    totalCases: {
        type: Number,
    },
    deaths: {
        type: Number,
    },
    testsConducted: {
        type: Number,
    }
},

);

const State = mongoose.model("State", stateSchema);

module.exports = State;
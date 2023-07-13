const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "Needs to be at least 10 chars"],
        required: [true, "A joke needs a setup!"]
    },
    punchline: {
        type: String,
        minlength: [3, "Needs to be at least 3 chars"],
        required: [true, "Where's the punchline?!"]
    },
}, {timestampes: true})

module.exports = mongoose.model("Joke", JokeSchema);
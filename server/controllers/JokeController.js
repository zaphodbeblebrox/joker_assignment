const Joke = require("../models/Joke");

module.exports.findJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => console.log(err));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findById({_id: req.params.id})
        .then(oneJoke => res.json({jokes: oneJoke}))
        .catch(err => console.log(err));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({jokes: newJoke}))
        .catch(err => res.json(err));
}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then(updatedJoke => res.json({jokes: updatedJoke}))
        .catch(err => res.json(err));
}

module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
        .then(results => res.json({result: results}))
        .catch(err => console.log(err));
}
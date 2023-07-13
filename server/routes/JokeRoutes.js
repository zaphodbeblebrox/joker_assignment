const JokeController = require("../controllers/JokeController");

module.exports = app => {
    app.get("/api/jokes", JokeController.findJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.post("/api/jokes", JokeController.createJoke);
    app.patch("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}
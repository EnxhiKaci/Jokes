const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
  jokeText: String,
});

const JokeModel = mongoose.model('Joke', JokeSchema);

module.exports = JokeModel;

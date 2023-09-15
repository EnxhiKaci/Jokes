const Joke = require('../models/jokes.model');

exports.createJoke = async (req, res) => {
  try {
    const { jokeText } = req.body;

    const newJoke = new Joke({ jokeText });

    const savedJoke = await newJoke.save();

    res.status(201).json(savedJoke);
  } catch (error) {
    console.error('Error creating joke:', error);
    res.status(404 ).json({ error: 'Could not create joke' });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(404 ).json({ error: 'Could not retrieve jokes' });
  }
};

// Retrieve a single joke by ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(joke);
  } catch (error) {
    res.status(404).json({ error: 'Could not retrieve joke' });
  }
};


exports.updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!joke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(joke);
  } catch (error) {
    res.status(404 ).json({ error: 'Could not update joke' });
  }
};

exports.deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndRemove(req.params.id);
    if (!joke) {
      return res.status(404).json({ error: 'Joke not found' });
    }
    res.json({ message: 'Joke deleted successfully' });
  } catch (error) {
    res.status(404 ).json({ error: 'Could not delete joke' });
  }
};
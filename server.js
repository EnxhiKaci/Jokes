const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jokesToSave = require('./node'); 
const JokeModel = require('./models/jokes.model');

require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Jokes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const JokeSchema = new mongoose.Schema({
  jokeText: String,
});


app.use(express.json());

app.get('/api/jokes', async (req, res) => {
  try {
    const jokes = await JokeModel.find();
    res.json(jokes);
  } catch (error) {
    res.status(404).json({ error: 'Could not retrieve jokes' });
  }
});

app.post('/api/jokes', async (req, res) => {
  try {
   
    const savedJokes = await JokeModel.create(jokesToSave);
    res.status(201).json(savedJokes);
  } catch (error) {
    console.error('Error saving jokes:', error);
    res.status(404).json({ error: 'Could not save jokes' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



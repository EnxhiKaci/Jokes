const mongoose = require('mongoose');
const JokeModel = require('./models/jokes.model'); 

mongoose.connect('mongodb://localhost:27017/Jokes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});
const jokesToSave = [
    {
      jokeText: 'Why did the chicken cross the road? To get to the other side.',
    },
    {
      jokeText: 'Did you hear about the claustrophobic astronaut? He just needed a little space.',
    },
  ];
JokeModel.create(jokesToSave, (err, savedJokes) => {
    if (err) {
      console.error('Error saving jokes:', err);
    } else {
      console.log('Jokes saved successfully:', savedJokes);
    }
  });
  
  module.exports = jokesToSave;
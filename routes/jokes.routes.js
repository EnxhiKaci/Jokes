const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

router.post('/jokes', jokesController.createJoke);

router.get('/jokes', jokesController.getAllJokes);

router.get('/jokes/:id', jokesController.getJokeById);

router.put('/jokes/:id', jokesController.updateJoke);

router.delete('/jokes/:id', jokesController.deleteJoke);

module.exports = router;

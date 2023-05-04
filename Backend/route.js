const router = require('express').Router();
const Timeline = require('./Timeline.model');
const Article = require('./Article.model');

router.get('/timeline', (req, res) => {
  Timeline.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/article/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

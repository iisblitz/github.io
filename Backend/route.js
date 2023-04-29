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

router.post('/article/add', (req, res) => {
  const language = req.body.language;
  const name = req.body.name;
  const category = req.body.category;
  const subcategory = req.body.subcategory;
  const location = req.body.location;
  const logo = req.body.logo;
  const photo = req.body.photo;
  const text = req.body.text;

  const newArticle = new Article({
    language,
    name,
    category,
    subcategory,
    location,
    logo,
    photo,
    text
  });

  newArticle.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/timeline/add', (req, res) => {
  const language = req.body.language;
  const image = req.body.image;
  const category = req.body.category;
  const name = req.body.name;
  const location = req.body.location;
  const businessName = req.body.businessName;
  const description = req.body.description;
  const begin = req.body.begin;
  const end = req.body.end;

  const newTimeline = new Timeline({
    language,
    image,
    category,
    name,
    location,
    businessName,
    description,
    begin,
    end
  });

  newTimeline.save()
    .then(() => res.json('Timeline event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

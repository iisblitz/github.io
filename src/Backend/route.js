const router = require('express').Router();
let {Articles, TimeLine} = require('./Articles.model');


router.get('/').get((req,res)=>{
    TimeLine.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/article/:id').get((req,res)=>{
    Articles.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('article/add').post((req,res)=>{
    const lenguage = req.body.lenguage;
    const name = req.body.name;
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const location = req.body.location;
    const logo= req.body.logo;
    const photo = req.body.photo;
    const text = req.body.text;

    const newArticle = new Article({
        lenguage,
        name,
        category,
        subcategory,
        location,
        logo,
        photo,
        text
    })

    newArticle.save()
    .then(()=> res.json('posted'))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/timeline/add').post((req,res)=>{
    const lenguage = req.body.lenguage;
    const image = req.body.image;
    const category = req.body.category;
    const name = req.body.name;
    const location = req.body.location;
    const businessName = req.body.businessName;
    const description = req.body.description;
    const begin = req.body.begin;
    const end = req.body.end;

    const newtimeLine = new TimeLine({
        lenguage,
        image,
        category,
        name,
        location,
        businessName,
        description,
        begin,
        end
    })

    newtimeLine.save()
    .then(()=> res.json('Posted!'))
    .catch(err => res.status(400).json('Error:' + err))
})

module.exports= router;
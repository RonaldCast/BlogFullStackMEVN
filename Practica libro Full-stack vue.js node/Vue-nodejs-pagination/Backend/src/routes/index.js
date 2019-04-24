const {Router} = require("express")
const router = Router();
const faker = require("faker");
//para guadar datos
const Article = require("../models/article")

//para general datos falsos 
router.get('/create', async (req,res) => {

    for(let i = 0; i < 100; i++){
      await  Article.create({
            title: faker.name.title(),
            imageURL: faker.image.imageUrl(),
            description: faker.lorem.paragraph()
        }) 
    }  

    res.send('100 Records created')
})

router.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles)
})
 
module.exports = router;
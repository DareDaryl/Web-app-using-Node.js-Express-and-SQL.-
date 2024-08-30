import express from 'express';
//localhost:3000/products/
const router = express.Router()
router.get("/", async (req, res) => {
    //res.send('products handled')
    res.render('products', {name: 'Tony Stark',  "users":[
        {"id":2,"name":"Tony Stark","address":"555 Paradise Island","country":"Themyscira"},
        {"id":4,"name":"Bruce Banner","address":"565 Hulk Way","country":"USA"},
        {"id":8,"name":"Bob  Barker","address":"555 Main Steet","country":"USA"},
        {"id":9,"name":"Clark Kent","address":"557 Smallvile Place","country":"USA"},
        {"id":12,"name":"Tim Tebow","address":"555 Elm","country":"USA"},
        {"id":13,"name":"Bruce Banner","address":"565 Hulk Way","country":"USA"},
        {"id":14,"name":"Bob  Barker","address":"555 Main Steet","country":"USA"}]
    });
});
export default router;
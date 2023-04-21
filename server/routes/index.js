const express = require('express');
const{getChar , login, handleFavotites} =  require('../controllers/index')
const router = express.Router();

router.get("/character/:id", getChar)

router.get("/login" , login);

router.post("/fav" , handleFavotites.postFav);

router.delete("/fav/:id" , handleFavotites.deleteFav);

module.exports = router
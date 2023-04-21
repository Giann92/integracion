let myFavorites = [];

const postFav = async (req, res) => {
        try {
            
            myFavorites.push(req.body);
            res.status(200).json(myFavorites);
        } catch (error) {
            console.log(error.message);
        }
  
}
const deleteFav = (req, res) => {

    const { id } = req.params;
        const filterDelete = myFavorites.filter((char) => char.id !== Number(id));
        myFavorites = filterDelete;
        res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav }
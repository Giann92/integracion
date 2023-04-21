const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
    try {
        const {id} = req.params;
        const apiURL = `${URL}${id}`;
        const response = (await axios.get(apiURL)).data;

        const character = {
             id: response.id,
              status: response.status,
               name: response.name,
                species: response.species,
                 origin: response.origin, 
                 image: response.image, 
                 gender: response.gender
        }

        res.json(character);
    }


    // if(data.error === 'Not fount') return res.status(404).send({message: 'Not fount'});
    catch (error) {
        res.status(500).send({ message: error.message });
    }

}
module.exports =
    getCharById




    //({id, status, name, species, origin, image , gender}))

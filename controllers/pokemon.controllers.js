import pokemonModel from "../models/pokemon.model.js";

const hola = async (req,res)=>{
    console.log("hola desde el controlador");
    res.status(200).send("hola desde el controlador")
}
const createPokemon = async (req,res)=>{
    try {
        const pokemon = new pokemonModel(req.body)
        await pokemon.save()
        return res.status(201).json(pokemon)
    } catch (error) {
        console.error(error);
        if(error.code == 11000){
            return res.status(500).json({
                message:"Ya existe el nombre del pokemon",
                error:error
                })
        }
        return res.status(error.status).json(error)   
    }
}
const getPokemons = async (req,res)=>{
    try {
        const pokemons = await pokemonModel.find()
        return res.status(200).json(pokemons)
    } catch (error) {
        console.error(error);
        return res.status(error.status).json(error) 
    }
}

export {hola,createPokemon,getPokemons}
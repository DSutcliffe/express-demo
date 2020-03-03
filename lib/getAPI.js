// Bring in request
const request = require('request');
require('dotenv').config() // https://www.npmjs.com/package.dotenv

// util is built into JS
// use {} to pull out promisify from util
const {promisify} = require('util');    // required part of the util module - the full util is quite big, and we don't all of it.

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    // request({
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&APPID=${process.env.APPID}`,
        json: true  // true returns json formatted, false will return just a string
    
    // no longer required
    // }, (err, res) => {
    //     if (err) throw err;     // ; signify end of statement this is a complete if
    //     console.log(res.body);  // Will show me any error
    })

    // Add this
    return data.body
}

const getHarryPotter = async () => {
    let data = await promisifiedRequest({
        uri: `https://www.potterapi.com/v1/sortingHat`,
        json: true
    })
    return data.body
}

const getChuckNorris = async () => {
    let data = await promisifiedRequest({
        uri: `http://api.icndb.com/jokes/random?exclude=[explicit]`,
        json: true
    })
    return data.body
}

// Need to sign up for my own API Key!!!
const getchuckNorrisRapidAPI = async () => {
    let data = await promisifiedRequest({
        uri: `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random,`,
        headers: {
            'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            'xrapidapi-key': '1d1497a78cmsh6f73a3f6b9cf08bp11d9b5jsn60765e8a6827',
            accept: 'application/json'
        }
    })
    return data.body
}

const getCocktail = async () => {
    let data = await promisifiedRequest({
        uri: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        json: true
    })
    return data.body
}

const getPokemon = async () => {
    let data = await promisifiedRequest({
        uri: `https://pokeapi.co/api/v2/pokemon/`,
        json: true
    })
    return data.body
}

module.exports = {
    getWeather,
    getHarryPotter,
    getChuckNorris,
    getchuckNorrisRapidAPI,
    getCocktail,
    getPokemon
}
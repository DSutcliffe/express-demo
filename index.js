// All Requires at top
// we require the express module
// without ./ means global within project (-g global within VS Code)
const express = require('express');  // npm i express - this allows me to use express server in my project
const request = require('request');  // npm i request - API Calls, use request as fetch is very new - will be replaced
// express handlebars
// path is to setup the public folder
// install express-handlebars path
const path = require('path');   // npm i path
const hbs = require('express-handlebars');  // npm i express-handlebars 

const app = express();   // now a function we are calling - initialised express to use its features
// const getWeather = require('./lib/getWeather')
const getAPI = require('./lib/getAPI');

// path is about to be set up
app.use(express.static(path.join(__dirname, 'public')));
// letting us use at the css file style.css but finds first public folder instead of phjysically writing location

// template engine
// Handlebars looks everywhere, thats how it finds index/about.hbs
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
// set it to use engine
app.set('view engine', '.hbs')

// APPID="34ab9a0e7ae72e9609dc4e4d6dd8cb19" node index.js   // Paste this into console

// getWeather();    // was used when getWeather function was in index.js

// four http methods: GET, POST , PUT & DELETE - You may see CRUD for some other stacks (Create, Read, Update & Delete)

// get is a function inside of express - for more info look at module on NPMJS
// for each file you want to load, you need a get.
// app.get('/', (req, res) => {                    // each get method should have a req (Request) & res (Response). 
app.get('/', async (req, res) => {          // add async!
    // sendFile is for express only, no templating engine used.
    // res.sendFile(__dirname + '/index.html');    // double underscore '__' for directory name not to get confused with snake_case
    // dont need sendFile anymore as going to render instead
    res.render('index')
})

app.get('/weather', async (req, res) => {
    // res.sendFile(__dirname + '/about.html');    // sendFile just sends, render renders the file
    let data = await getAPI.getWeather()
    console.log(data)
    res.render('weather', {
        data,
        title: `Weather Data: ${data.weather[0].description}`,
        other: `Location: ${data.name}`
    }) 
})

app.get('/harryPotter', async (req, res) => {
    // res.sendFile(__dirname + '/about.html');    // sendFile just sends, render renders the file
    let data = await getAPI.getHarryPotter()
    console.log(data)
    res.render('harryPotter', {
        data,
        title: `You have been randomly sorted into: ${data}`
    }) 
})

app.get('/chuckNorris', async (req, res) => {
    let data = await getAPI.getChuckNorris()
    console.log(data)
    res.render('chuckNorris', {
        data,
        title: `Random Joke: ${data.value.joke}`
    }) 
})

// ********** Rapid API version not working ************
app.get('/chuckNorrisRapidAPI', async (req, res) => {
    let data = await getAPI.getchuckNorrisRapidAPI()
    console.log(data)
    res.render('chuckNorrisRapidAPI', {
        data,
        title: `Random Joke: ${data}`
    }) 
})

app.get('/cocktail', async (req, res) => {
    let data = await getAPI.getCocktail()
    console.log(data)

    let ing1 = data.drinks[0].strIngredient1
    let meas1 = data.drinks[0].strMeasure1
    let ing2 = data.drinks[0].strIngredient2
    let meas2 = data.drinks[0].strMeasure2
    let ing3 = data.drinks[0].strIngredient3
    let meas3 = data.drinks[0].strMeasure3
    let ing4 = data.drinks[0].strIngredient4
    let meas4 = data.drinks[0].strMeasure4
    let ing5 = data.drinks[0].strIngredient5
    let meas5 = data.drinks[0].strMeasure5
    let ing6 = data.drinks[0].strIngredient6
    let meas6 = data.drinks[0].strMeasure6
    let ing7 = data.drinks[0].strIngredient7
    let meas7 = data.drinks[0].strMeasure7
    let ing8 = data.drinks[0].strIngredient8
    let meas8 = data.drinks[0].strMeasure8
    let ing9 = data.drinks[0].strIngredient9
    let meas9 = data.drinks[0].strMeasure9
    let ing10 = data.drinks[0].strIngredient10
    let meas10 = data.drinks[0].strMeasure10
    let ing11 = data.drinks[0].strIngredient11
    let meas11 = data.drinks[0].strMeasure11
    let ing12 = data.drinks[0].strIngredient12
    let meas12 = data.drinks[0].strMeasure12
    let ing13 = data.drinks[0].strIngredient13
    let meas13 = data.drinks[0].strMeasure13
    let ing14 = data.drinks[0].strIngredient14
    let meas14 = data.drinks[0].strMeasure14
    let ing15 = data.drinks[0].strIngredient15
    let meas15 = data.drinks[0].strMeasure15

    if (data.drinks[0].strIngredient1 === null) {
        ing1 = "";
        meas1 = "";
    }
    if (data.drinks[0].strIngredient2 === null) {
        ing2 = ""
        meas2 = ""
    }
    if (data.drinks[0].strIngredient3 === null) {
        ing3 = ""
        meas3 = ""
    }
    if (data.drinks[0].strIngredient4 === null) {
        ing4 = ""
        meas4 = ""
    }
    if (data.drinks[0].strIngredient5 === null) {
        ing5 = ""
        meas5 = ""
    }
    if (data.drinks[0].strIngredient6 === null) {
        ing6 = ""
        meas6 = ""
    }
    if (data.drinks[0].strIngredient7 === null) {
        ing7 = ""
        meas7 = ""
    }
    if (data.drinks[0].strIngredient8 === null) {
        ing8 = ""
        meas8 = ""
    }
    if (data.drinks[0].strIngredient9 === null) {
        ing9 = ""
        meas9 = ""
    }
    if (data.drinks[0].strIngredient10 === null) {
        ing10 = ""
        meas10 = ""
    }
    if (data.drinks[0].strIngredient11 === null) {
        ing11 = ""
        meas11 = ""
    }
    if (data.drinks[0].strIngredient12 === null) {
        ing12 = ""
        meas12 = ""
    }
    if (data.drinks[0].strIngredient13 === null) {
        ing13 = ""
        meas13 = ""
    }
    if (data.drinks[0].strIngredient14 === null) {
        ing14 = ""
        meas14 = ""
    }
    if (data.drinks[0].strIngredient15 === null) {
        ing15 = ""
        meas15 = ""
    }

    res.render('cocktail', {
        data,
        title: `Cocktail Name: ${data.drinks[0].strDrink}`,
        instructions: `${data.drinks[0].strInstructions}`,
        picture: `${data.drinks[0].strDrinkThumb}`,
        ing1: `${ing1}`,
        meas1: `${meas1}`,
        ing2: `${ing2}`,
        meas2: `${meas2}`,
        ing3: `${ing3}`,
        meas3: `${meas3}`,
        ing4: `${ing4}`,
        meas4: `${meas4}`,
        ing5: `${ing5}`,
        meas5: `${meas5}`,
        ing6: `${ing6}`,
        meas6: `${meas6}`,
        ing7: `${ing7}`,
        meas7: `${meas7}`,
        ing8: `${ing8}`,
        meas8: `${meas8}`,
        ing9: `${ing9}`,
        meas9: `${meas9}`,
        ing10: `${ing10}`,
        meas10: `${meas10}`,
        ing11: `${ing11}`,
        meas11: `${meas11}`,
        ing12: `${ing12}`,
        meas12: `${meas12}`,
        ing13: `${ing13}`,
        meas13: `${meas13}`,
        ing14: `${ing14}`,
        meas14: `${meas14}`,
        ing15: `${ing15}`,
        meas15: `${meas15}`
        
    }) 
})

app.get('/pokemon', async (req, res) => {
    let data = await getAPI.getPokemon()
    console.log(data)

    let randomNumber;
    randomNumber = Math.ceil(Math.random()*20);
    console.log(randomNumber);

    res.render('pokemon', {
        data,
        // title: `${data.results[0].name}`
        title: `${data.results[randomNumber].name}`
    }) 
})

app.listen(3000, () => {    // listen is all about ports - creates a connection on a specified port (localhost:3000 - Response 'cannot GET /', looking for '/')
    console.log('I am listening on port 3000');
})      
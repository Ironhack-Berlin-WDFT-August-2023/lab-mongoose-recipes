const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    console.log("All existing recipes deleted from the DB!!!")
    // Run your code here, after you have insured that the connection was made
    // iteration 2

    const newRecipe = {
      title: 'Mixto quente',
      level: 'Easy Peasy',
      ingredients: ['pão francês', 'queijo', 'presunto'],
      cuisine: 'Brasileira',
      dishType: 'snack',
      image:
        'http://culinaria.culturamix.com/blog/wp-content/gallery/misto-quente-3/Misto-Quente-6.jpg',
      duration: 5,
      creator: 'unknown'
    };

    return Recipe.create(newRecipe);
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

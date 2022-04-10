const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // console.log('List of recipes:', data);
    // Recipe.create(data[0]);
    return Recipe.create({
      title: 'Musakka',
      level: 'Amateur Chef',
      ingredients: [
        'Eggplants',
        'Tomatoes',
        'Minced meat',
        'Tomato paste',
        'Salt & Pepper'
      ],
      cuisine: 'Aegean',
      dishType: 'main_course',
      image:
        'https://www.tuerkisch-rezepte.de/wp-content/uploads/Patl%C4%B1can-Musakka-auberginen-mousakka-rezept.png',
      duration: 90
    });
  })
  .then((response) => {
    console.log(response.title);
    Recipe.insertMany(data);
  })
  .then(() => {
    return Recipe.findOneAndUpdate(
      {
        title: 'Rigatoni alla Genovese'
      },
      { duration: 100 },
      { new: true }
    );
  })
  .then(() => {
    console.log('Recipe updated');
  })
  .then(() => {
    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .then(() => {
    console.log('Recipe deleted');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

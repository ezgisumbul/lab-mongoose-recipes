const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 140
    },

    level: {
      type: String,
      enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
    },

    ingredients: [String],

    cuisine: {
      type: String,
      required: true
    },

    dishType: {
      type: String,
      enum: [
        'breakfast',
        'main_course',
        'soup',
        'snack',
        'drink',
        'dessert',
        'other'
      ]
    },

    image: {
      type: String,
      default: 'https://images.media-allrecipes.com/images/75131.jpg'
    },

    duration: {
      type: Number,
      min: 0
    },

    creator: {
      type: String
    }

    // created: {
    //   type: Date
    //   // default: () => new Date();
    //   // var today = new Date();
    //   // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // }
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

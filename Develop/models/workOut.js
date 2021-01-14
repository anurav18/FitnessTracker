const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  exerciseType: {
    type: String,
    trim: true,
    required: "Exercise type is Required"
  },

  distance: {
    type: Number,
    trim: true,
    required: "Distance is Required"
  },

  duration: {
    type: Number,
    trim: true,
    required: "Duration is Required"
  },

  cardioName: {
    type: String,
    trim: true,
    required: "cardio Name is Required"
  },

  exerciseName: {
    type: String,
    trim: true,
    required: "exercise Name is Required"
  },

  weight: {
    type: Number,
    trim: true,
    required: "Weight(lbs) is Required"
  },

  sets: {
    type: Number,
    trim: true,
    required: "Number of sets performed is Required"
  },
  reps: {
    type: Number,
    trim: true,
    required: "Number of reps performed is Required"
  },
  resistanceDuration: {
    type: Number,
    trim: true,
    required: "Duration is Required"
  }
 
});


const workOut = mongoose.model("workOut", workOutSchema);

module.exports = workOut;

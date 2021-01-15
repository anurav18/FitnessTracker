const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({

  day:{
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Type should be entered"
      },
      name: {
        type: String,
        trim: true,
        required: "This is a required field"
      },
      duration: {
        type: Number,
        required: "This is a required field"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});
const workOut = mongoose.model("workOut", workOutSchema);

module.exports = workOut;

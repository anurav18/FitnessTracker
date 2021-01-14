const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({

  day:{
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});
const workOut = mongoose.model("workOut", workOutSchema);

module.exports = workOut;

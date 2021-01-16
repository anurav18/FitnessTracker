const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


//re-direct to exercise.html page

app.get("/exercise",(req,res)=>{
res.sendFile(path.join(__dirname,"/public/exercise.html"));
});

//re-direct to stats.html page

app.get("/stats",(req,res)=>{
res.sendFile(path.join(__dirname,"/public/stats.html"));
});

//add a new workout
app.post("/api/workouts", (req, res) => {
  db.workOut.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// //adding a new exercise

app.put("/api/workouts/:id", ({ body, params }, res) => {
  const id = params.id;
  db.workOut.findOneAndUpdate({_id: id},{ $push: { exercises: body }},{ new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// //get last workout information

app.get("/api/workouts", (req, res) => {
  db.workOut.aggregate([
    {$addFields: {
            totalDuration: {
                $sum: ["$exercises.duration"]
            }
        }
    }
]).then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// //List of workouts between a range

app.get("/api/workouts/range", (req, res) => {
  db.workOut.aggregate([
    {$addFields: {
            totalDuration: {
                $sum: ["$exercises.duration"]
            }
        }
    }
]).sort({day: -1}).limit(7).sort({day:1}).then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

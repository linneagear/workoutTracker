
# Workout Tracker

I was provided with the front end code and was assigned to handle the server side. This Workout Tracker creates a Mongo database with a Mongoose schema and handles routes with Express.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Usage

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

![New or Continue](/public/images/newWorkout.JPG)

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.

![Input](/public/images/input.JPG)

![Charts](/public/images/graphs.JPG)


[Deployed Link](https://thawing-woodland-90372.herokuapp.com/)

## Dependencies

- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [mLab](https://mlab.com/) - connects Mongo database
- [Robo3T](https://robomongo.org/) - helped to connect to the Mongo database

## Future Developments
There was some confusion on my end for having two different buttons, one for "Complete" and "Add Exercise." I thought you had to press Add Exercise to add, and then hit Complete but in actuality you only had to press one or the other. I would change the Complete button to either Delete Exercise, or just have one button to add the exercise. 

The dates also don't line up on the graphs; it keeps going forward, instead of taking in the date the user enters.

When trying to deploy to Heroku, the server was not able to navigate to the models folder, so I had to move Workout.js into the main file in order to be read.
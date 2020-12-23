const db = require('../models');
const Individual = db.individuals;

// Create and Save a new Individual
exports.create = (req, res) => {
  // // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a new Individual

  console.log("Creating new Individual", req.body);

  const individual = new Individual({
    name: {
      firstName: req.body.basicDetails.firstName,
      middleName: req.body.basicDetails.middleName,
      lastName: req.body.basicDetails.lastName,
      nickName: req.body.basicDetails.nickName,
    },
    gender: req.body.basicDetails.gender,
    birth: {
      date: req.body.eventDetails.birthDetails.dateOfBirth,
      place: req.body.eventDetails.birthDetails.placeOfBirth,
      parents: [{
        id: req.body.eventDetails.birthDetails.father,
        role: 'father'
      }, {
        id: req.body.eventDetails.birthDetails.mother,
        role: 'mother'
      }
      ]
    },
    death: {
      date: req.body.eventDetails.deathDetails.dateOfDeath,
      place: req.body.eventDetails.deathDetails.placeOfDeath
    },

  })

  // Save Tutorial in the database
  individual
    .save(individual)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Individual."
      });
    });
};

// Retrieve all Individuals from the database.
exports.findAll = (req, res) => {

  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  console.log("First Name", firstName);
  console.log("Last name", lastName);

  // result: { $and: [ { $gt: [ "$qty", 100 ] }, { $lt: [ "$qty", 250 ] } ] }

  //var condition = (firstName || lastName) ? { "name.lastName": { $regex: new RegExp(lastName), $options: "i" } } : {};
  var condition = (firstName || lastName) ? { $and: [{ "name.firstName": { $regex: new RegExp(firstName), $options: "i" } }, { "name.lastName": { $regex: new RegExp(lastName), $options: "i" } }] } : {};

  // console.log("condition", condition);

  Individual.find(condition)
    .then(data => {
      console.log("data returned", data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || " Some error occurred while retriveing members "
      });
    });

};

// Find a single Individual with an id
exports.findOne = (req, res) => {

};

// Update a Individual by the id in the request
exports.update = (req, res) => {

};

// Delete a Individal with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Individual from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Individuals
exports.findAllPublished = (req, res) => {

};
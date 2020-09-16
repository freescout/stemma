const db = require('../models');


const Member = db.members;
const Birth = db.births;

// Create and Save a new Member
exports.create = (req, res) => {
  // Validate request
  //console.log("Printing body", req.body);
/*   if (!req.body.id) {
    res.status(400).send({ message: "id cannot be empty" });
    return;
  } */


// Create a member
  const member = new Member({
    id: req.body.id,
    name: {
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      nickName: req.body.nickName, 
    },
    gender: req.body.gender,
      /* events: {
      birth: req.body.birthId

    }  */
  })
console.log("Printing member", member);

// Save Member in the database
  member
    .save(member)
     .then(data => {
      res.send(data);
      console.log("Added memeber", data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occured while creating the member"
      });
    });
  
   /* const birth = new Birth({
    id: req.body.birthId,
    date: req.body.dateOfBirth,
    place: req.body.placeOfBirth,
    individual: req.body.id,
      parents: [{
        id: req.body.father,
        role: 'father'
      }, {
          id: req.body.mother,
          role: 'mother'
      }
    ]
    
  })
  console.log("Printing birth", birth);

   birth
    .save(birth)
    .then(data => {
      console.log("At birth");
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the birth event"
      });
    });   */
    
};


// Retrieve all Members from the database with last name
// db.bios.find( { "name.last": "Hopper" } )
exports.findAll = (req, res) => {

  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  console.log(firstName);
  console.log(lastName);

  // result: { $and: [ { $gt: [ "$qty", 100 ] }, { $lt: [ "$qty", 250 ] } ] }

  //var condition = (firstName || lastName) ? { "name.lastName": { $regex: new RegExp(lastName), $options: "i" } } : {};
  var condition = (firstName || lastName) ? { $and: [{ "name.firstName": { $regex: new RegExp(firstName), $options: "i" } }, { "name.lastName": { $regex: new RegExp(lastName), $options: "i" } }] } : {};

  //console.log("condition", condition);

  Member.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||" Some error occurred while retriveing members "
      });
    });

};

// Find a member with id
exports.findOne = (req, res) => {
  const id = req.params.id;
 
  Member.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found a member with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
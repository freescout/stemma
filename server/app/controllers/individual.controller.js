const db = require('../models')

const Individual = db.individuals;
const Events = db.events;
const Places = db.places;
const IndivId = "";

// Create and Save a new Member
exports.create = (req, res) => {
  // Validate request
  console.log("Printing body", req.body);
/*   if (!req.body.id) {
    res.status(400).send({ message: "id cannot be empty" });
    return;
  } */


// Create a member
  const individual = new Individual({
    id: req.body.id,
    name: {
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      nickName: req.body.nickName, 
    },
    gender: req.body.gender,

  })

/*   const places = new Places({
    addr: req.body.placeOfBirth
  }); */
//console.log("Printing member", member);

// Save Member in the database
  individual
    .save(individual)
     .then(data => {
      //res.send(data);
      console.log("Added individual with id", data._id);
      const events = new Events({
        birth: [
          {
            individual: data._id,
            date: req.body.dateOfBirth,
            place: req.body.placeOfBirth,
            parents: [{
              id: req.body.father,
              role: 'father'
            }, {
              id: req.body.mother,
              role: 'mother'
            }
            ]
          }
        ],
         death: [
          {
            individual: data._id,
            date: req.body.dateOfDeath,
            place: req.body.placeOfDeath
          }
        ] 
      })
 
        events
         .save(events)
         .then(eventdata => {
           console.log("Printing events", events); 
           console.log("At events", eventdata);
           res.send(eventdata);
         })
         .catch(err => {
           console.log("Error at Events", err);
           res.status(500).send({
             message:
               err.message || "Some error occured while creating events"
           }); 

         });  
       //console.log("Printing events", events);  
/*         events.save(function (err, doc) {
         if (err) return console.error(err);
         console.log("Document inserted succussfully!");
       });  */

    }) 
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occured while creating the member"
      });
      return;
    });
  


    

  
    
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
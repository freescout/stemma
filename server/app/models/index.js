const dbConfig = require("../config/db.config.js");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.members = require('./member.model.js')(mongoose);
db.births = require('./events/birth.js')(mongoose);
db.places = require('./places.model.js')

module.exports = db;
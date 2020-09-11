const { events } = require(".");

module.exports = mongoose => {
  var Schema = mongoose.Schema(
    {
      id: String,
      address: String
    }
  )
}
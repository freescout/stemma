// const { births, members, places } = require(".");

module.exports = mongoose => {
  var BirthSchema = mongoose.Schema(
    {
      id: String,
      date: Date,
      place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
      individual: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true},
      parents: [
        {
          id: { type: mongoose.Schema.Types.ObjectId, ref: 'Member'}, 
          role: String
        }
      ]
    }
  )
  const Birth = mongoose.model('birth', BirthSchema);
  return Birth;
}
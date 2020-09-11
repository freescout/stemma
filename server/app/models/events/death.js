
const { death } = require(".");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      data: Date,
      place: { type: Schema.Types.ObjectId, ref: 'Place' },
      individual: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    }
  )
  const Birth = mongoose.model('death', schema);
  return Birth;
}
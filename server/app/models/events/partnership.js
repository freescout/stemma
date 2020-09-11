
const { partnership } = require(".");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      type: { type: String, required: true, enum: ['Marriage', 'Living Together', 'Other'], default: 'Other'},
      data: Date,
      place: { type: Schema.Types.ObjectId, ref: 'Place' },
      individuals: [
        {
          id: { type: Schema.Types.ObjectId, ref: 'Member' },
          role: String
        }
      ]
    }
  )
  const Partnership = mongoose.model('partnership', schema);
  return Partnership;
}            
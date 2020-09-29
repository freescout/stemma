module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      date: Date,
       type: { type: String, enum: ['marriage', 'living together', 'Other'], default: 'marriage'},
      place: String,
      individuals: [
        {
          id: { type: Schema.Types.ObjectId, ref: 'Member' },
          role: String
        }
      ]  
    } 
  )
  const Partnership = mongoose.model('partnerships', schema);
  return Partnership;
}            




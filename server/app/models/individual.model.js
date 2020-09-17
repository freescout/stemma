module.exports = mongoose => {
  const Individual = mongoose.model(
    'individual',
    mongoose.Schema(
    {
      name: {
        firstName: String,
        middleName: String,
        lastName: String,
        nickName: String        
      },
      gender: { type: String, required: true, enum: ['male', 'female', 'other'], default: 'other' },
/*        events: {
         birth: { type: mongoose.Schema.Types.ObjectId, ref: 'birth' },
        partnerships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'partnership'}],
        children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'birth' }],
        death: { type: mongoose.Schema.Types.ObjectId, ref: 'death'} 
      }   */
    }
  ));
  return Individual;
};
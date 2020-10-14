module.exports = mongoose => {
  const Individual = mongoose.model(
    'individuals',
    mongoose.Schema(
    {
        name: [{
          "nameType": String,
          "value": String
        }],
      gender: { type: String, required: true, enum: ['male', 'female', 'other'], default: 'other' },
      birth: {
        date: Date,
        place: String,
        parents: [
          {
            id: String,
            role: String
          }
        ],
        partnerships: [
          {
            ids:String
          }
        ],
        children: [
          {
            id: String
          }
        ]
      },

    }
  ));
  return Individual;
};
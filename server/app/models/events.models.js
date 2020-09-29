module.exports = mongoose => {
  const Events = mongoose.model(
    'events',
  mongoose.Schema(
    {
      birth: [
        {
          individual: String,
          date: Date,
          place: String,
          parents: [
            {
              id: String,
              role: String
            }
          ]
        }
      ],
      death: [
        {
          individual: String,
          date: Date,
          place: String          
        }
      ],
      partnerships: [
        {
          type: { type: String, enum: ['marriage', 'living together', 'Other'], default: 'marriage' },
          date: Date,         
          place: String,
          individuals: [
            {
              id: String,
              role: String
            }
          ]  
        }
      ]
    }
  ));
  return Events;
};

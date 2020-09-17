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
      ]
    }
  ));
  return Events;
};
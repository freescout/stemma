const { members, births } = require(".");


module.exports = mongoose => {
  var MemberSchema = mongoose.Schema(
    {
      id: String,
      name: {
        firstName: String,
        middleName: String,
        lastName: String,
        nickName: String        
      },
      gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'], default: 'Other' },
      events: {
        birth: { type: mongoose.Schema.Types.ObjectId, ref: 'Birth', required: true },
        partnerships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partnership'}],
        children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Birth' }],
        death: { type: mongoose.Schema.Types.ObjectId, ref: 'Death'}
      }
    }
  );
  MemberSchema.method("toJSON", function() {
    const { _v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
  const Member = mongoose.model('member', MemberSchema);
  return Member;
};
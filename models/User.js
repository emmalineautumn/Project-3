let mongoose = require("mongoose");
let bcrypt = require("bcryptjs");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  characters: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }],
  campaigns: [{
    type: Schema.Types.ObjectId,
    ref: "Campaign"
  }]
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model("User", UserSchema);

module.exports = User;
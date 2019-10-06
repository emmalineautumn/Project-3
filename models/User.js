let mongoose = require("mongoose");

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
  characters: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }],
  campaigns: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
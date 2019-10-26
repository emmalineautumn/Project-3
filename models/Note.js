let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let NotesSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now()
  },
  note: {
    type: String,
    required: true,
    unique: true
  }
});

let Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
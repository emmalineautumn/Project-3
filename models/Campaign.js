let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CampaignSchema = new Schema({
  characters: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }],
  monsters: [{
    type: String
  }],
  Notes: [{
    type: String
  }],
  Maps: [{
    type: String,
  }],
  NPCs: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }]
});

let Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
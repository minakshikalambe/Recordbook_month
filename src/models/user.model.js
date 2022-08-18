const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    registrationDate: { type: Date, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    
  }, {
    versionKey: false,
    timestamps:true
}
);

module.exports = mongoose.model("User", userSchema);


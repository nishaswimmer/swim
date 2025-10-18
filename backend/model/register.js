let mongoose = require("mongoose")

let registerSchema = mongoose.Schema({
   userName: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
   },
   userEmail: {
      type: String,
      required: true,
      unique: true,
   },
   phone: {
      type: Number,
      required: true,
   },
   town: {
      type: String,

   },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category"
   },
    date: {
      type: String,

   },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"

   },
   zipcode: {
      type: String,
   }

})

module.exports = mongoose.model("Register", registerSchema)
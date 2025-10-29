let mongoose = require("mongoose")

let blogSchema = mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
   },
   poston: {
      type: String,
      required: true,
   },
   postby: {
      type: String,
      required: true,
   },
   img :{
     type: String,
      required: true,
   }

})

module.exports = mongoose.model("Blog", blogSchema)
let express = require("express")
let bcrypt = require("bcrypt")
let mongoose = require("mongoose")
let app = express()
let cors = require("cors")
app.use(express.json())
app.use(cors())
const categoryRoute = require("./routes/category")
app.use("/", categoryRoute)
const registerRoute = require("./routes/register")
app.use("/", registerRoute)


let contactSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   phone: {
      type: Number,
      required: true,
   },
   subject: {
      type: String,

   },
   message: {
      type: String,
   }

})
let Contacts = mongoose.model("contact", contactSchema)


app.post("/api/contact", async (req, res) => {
   let data = req.body
   try {
      await Contacts.create(data)
      res.status(200).json({ msg: "data save" })


   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error" })

   }

})

app.get("/api/viewContact", async (req, res) => {
   try {
      const allContact = await Contacts.find()
      res.status(200).json({ allContact })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }
})

// let categorySchema = mongoose.Schema({
//    category: {
//       type: String,
//       required: true
//    },
// })
// let Category = mongoose.model("category", categorySchema)

// app.post("/api/addCategory", async (req, res) => {
//    const data = req.body
//    try {
//       await Category.create(data)
//       res.status(200).json({ msg: "category add!" })

//    } catch (error) {
//       console.log(error)
//       res.status(500).json({ msg: "server error!" })

//    }
// })

let addclassSchema = mongoose.Schema({
   classtype: {
      type: String,
      required: true,
   },
   agegroup: {
      type: String,
   },
   time: {
      type: String,
      required: true,

   },
   description: {
      type: String,
      // required: true,
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category"
   },
   totalclass: {
      type: Number,
   },
   img: {
      type: String,
   }


})
let SwimClass = mongoose.model("Swimclass", addclassSchema)
app.post("/api/addclass", async (req, res) => {
   const data = req.body
   try {
      await SwimClass.create(data)
      res.status(200).json({ msg: "Class add!" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }
})
app.put("/api/updateclass/:id", async (req, res) => {
   const data = req.body
  const _id =   req.params.id
   try {
      await SwimClass.findOneAndUpdate({_id} , data)
      res.status(200).json({ msg: "Class Updated!" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }
})
app.delete("/api/deleteClasses/:id", async (req, res) => {

   try {
      await SwimClass.findOneAndDelete({ _id: req.params.id })
      res.status(200).json({ msg: "data delete !" })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }

});


app.delete("/api/deleteContact/:id", async (req, res) => {

   try {
      await Contacts.findOneAndDelete({ _id: req.params.id })
      res.status(200).json({ msg: "data delete !" })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }

});
// app.get("/api/getCategory", async (req, res) => {
//    try {
//       let allCategory = await Category.find();
//       res.status(200).json({ allCategory });
//    } catch (error) {
//       console.log(error);
//       res.status(500).json({ msg: "Server Error!" });

//    }
// });
app.get("/api/getClasses", async (req, res) => {
   try {
      let allClasses = await SwimClass.find().populate("category");
      res.status(200).json({ allClasses });
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" });

   }
});

app.get("/api/getdatabyID/:id", async (req, res) => {
  const _id =   req.params.id
   try {
      let allClasses = await SwimClass.findOne({_id});
      res.status(200).json( allClasses);
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" });

   }
});


let signup = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,

   }

})
let Users = mongoose.model("User", signup)

app.post("/api/sign", async (req, res) => {
   const data = req.body
   console.log(data)
   try {
      if (data.password.trim() === "") {
         return res.status(400).json({ msg: "fill pAssword !" })
      }
      let salt = await bcrypt.genSalt()
      let newPassword = await bcrypt.hash(data.password, salt)

      data.password = newPassword

      await Users.create(data)
      res.status(200).json({ msg: "user signup!" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }

})

// let Login = mongoose.model("login", categorySchema)



app.post("/api/login", async (req, res) => {
   const data = req.body
   try {
      const find = await Users.findOne({ email: data.email })
      if (!find) {
         return res.status(401).json({ msg: "user not found" })
      }
      const match = await bcrypt.compare(data.password, find.password)
      if (!match) {
         return res.status(401).json({ msg: "password not match" })
      }

      res.status(200).json(find)
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }
})


app.get("/getUserInfo/:id", async (req, res) => {
   const _id = req.params.id
   try {
      const userInfo = await Users.findOne({ _id })
      console.log(userInfo)
      res.status(200).json(userInfo)
   } catch (error) {
      res.status(500).json({ msg: "server error!" })

      console.log(error);
   }
})

// mongoose.connect("mongodb://localhost:27017/swim")
mongoose.connect("mongodb+srv://nishaswimmer_db_user:CCwUqouggvCh1vTv@cluster0.7pt7ipf.mongodb.net/")
   .then(() => {
      app.listen(4001, () => {
         console.log("server start!")
      })

   })
   .catch((error) => {
      console.log(error)
   })
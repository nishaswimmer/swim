const express =  require("express")
const router =  express.Router()
const Register =  require("../model/register")



router.post("/api/register" , async(req,res)=>{
    const data = req.body
    console.log(data)
       try {
          await Register.create(data)
          res.status(200).json({ msg: "user register !" })
    
       } catch (error) {
          console.log(error)
          res.status(500).json({ msg: "server error!" })
    
       }
    })


    router.get("/api/ViewRegister", async (req, res) => {
   try {
      const allRegister = await Register.find().populate("course")
  
      res.status(200).json({ allRegister })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }
})
router.delete("/api/deleteRegister/:id", async (req, res) => {

   try {
      await Register.findOneAndDelete({ _id: req.params.id })
      res.status(200).json({ msg: "data delete !" })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }

});



 router.get("/api/ViewRegister/v1/:id", async (req, res) => {
 let userID =  req.params.id
   try {
      const allRegister = await Register.find({userID}).populate("course")
      res.status(200).json({ allRegister })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }
})


router.delete("/api/deleteMyRegistration/:id", async (req, res) => {

   try {
      await Register.findOneAndDelete({ _id: req.params.id })
      res.status(200).json({ msg: "data delete !" })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }

});
    module.exports = router
    


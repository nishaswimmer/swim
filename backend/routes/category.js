const Category =   require("../model/category")

const express =  require("express")
const router =  express.Router()


router.post("/api/addCategory", async (req, res) => {
   const data = req.body
   try {
      await Category.create(data)
      res.status(200).json({ msg: "category add!" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }
})

router.get("/api/getCategory", async (req, res) => {
   try {
      let allCategory = await Category.find();
      res.status(200).json({ allCategory });
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" });

   }
});

router.get("/api/deleteCategory/:id", async (req, res) => {
   let _id = req.params.id
   try {
      await Category.findOneAndDelete({ _id })
      res.status(200).json({ msg: "data delete!" });
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" })
   }
})
module.exports = router
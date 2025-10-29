const express =  require("express")
const router =  express.Router()
const Blog =  require("../model/blog")
router.post("/api/addblog", async (req, res) => {
   const data = req.body
   try {
      await Blog.create(data)
      res.status(200).json({ msg: " Blog  add!" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })

   }
})
router.delete("/api/deleteBlog/:id", async (req, res) => {

   try {
      await Blog.findOneAndDelete({ _id: req.params.id })
      res.status(200).json({ msg: "data delete !" })
   } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "server error!" })
   }

});
router.get("/api/getblog", async (req, res) => {
   try {
      let allBlog = await Blog.find().populate("category");
      res.status(200).json({ allBlog});
   } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error!" });

   }
});



module.exports = router
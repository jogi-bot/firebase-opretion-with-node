const express = require("express");

const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

//DELETE DATA 
app.get("/delete", async(req, res)=>{
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({msg:"deleted file"})


})
// UPDATE DATA
app.get("/update", async(req, res) => {
    const id = req.body.id
    console.log(req.body);
    delete req.body.id
    console.log(req.body);
    const data = req.body
    await User.doc(id).update(data);
    res.send({ msg: "User Added"})
})
// GET ALL DATA
app.get("/all", async (req, res) => {
  const snapshot = await User.get();
  const nail = snapshot.docs.map((data) => ({id:data.id,  ...data.data()}));
  res.send(nail);
});

//CREATE DATA 
app.get("/create", async (req, res) => {
  const data = req.body;
  //  console.log(data, 'users data')
  await User.add(data);
  res.send("data add ");
 
});

app.listen(8000, () => {
  console.log("you are in 8000");
});

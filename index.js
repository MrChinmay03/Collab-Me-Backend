const express = require("express");
require("./src/mongodb");
const app = express();
const Text = require("./src/schema/schema");
app.use(express.json());

app.get("/all",async(req,res)=>{
    const data = await Text.find({});
    console.log(data);
    res.status(200).json({data:data});
});

app.get("/latest/:num",async(req,res)=>{
    const data = await Text.find({});
    let latest = data[data.length-req.params.num];
    res.status(200).json({"latest msg":latest});
});

app.post("/update", async (req, res) => {
  const data = await Text.insertMany({ text: req.body.text });
  res.status(200).json({ msg: `Updated new text ${req.body.text}` });
});

app.listen("5001", () => {
  console.log("Listening port");
});

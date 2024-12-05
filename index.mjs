import express from "express";
import mongoose from "mongoose";

import Learner from "./model/mongoose.mjs";
import grades_stats from "./routes/grades_stats.mjs"; ///////////added
app.use("/grades", grades_stats); //////////////////////added

const PORT = 5050;
const app = express();

app.use(express.json());

await mongoose.connect(process.env.ATLAS_URI);

async () => {
  await newDoc.save();
};

app.get("/", (req, res) => {
  res.send("Welcome to the MongoDB lab");
});

app.get("/passing", async (req, res) => {
  let result = await Learner.findPassing();
  res.send(result);
});

app.get("/:id", async (req, res) => {
  try {
    let result = await Learner.findById(req.params.id);
    res.send(result);
  } catch {
    res.send("Invalid ID").status(400);
  }
});



app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

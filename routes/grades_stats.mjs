import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/grades/stats", async (req, res) => {
  let collection = await db.collection("grades");
  let result = await collection
    .aggregate([
{$match: { "avg": { $gt: 70 } } },
{$count:"numberOfgt70"}, ]);
([
  {$count:"numberOfLearners"}, ]);
([
  { $project: {  "percentOFgt70": { $divide: ["$numberOfgt70", "$numberOfLearners"] }
    }
}
]);
return result
});


router.get("/grades/stats/:id", async (req, res) => {
  let collection = await db.collection("grades");
collection.createIndex({ class_id: 1}, (err, result));

collection.createIndex({ learner_id: 1}, (err, result));

collection.createIndex({ learner_id: 1,  class_id: 1}, (err, result));

async() =>{
  await db.createCollection("grades",
    {
    validator:{
      $jsonSchema:{
      bsonType: "object",
      required: ["class_id", "learner_id"],
      properties: {
        class_id:{
          bsonType: "int",
          minimum: 0,
          maxmum: 300,
          description: "class_id is required and must be an integer between 0 and 300, inclusive."
        },

        learner_id:{
          bsonType: "int",
          minimum: 0,
          description: "learner_id is required and must be an integer greater than or equal to 0."
        }
      }
      }
    },

    validationAction: "warn"
  })
}
})

export default router;

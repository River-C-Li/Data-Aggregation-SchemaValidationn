import mongoose from "mongoose";

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

    const learnerSchema = new mongoose.Schema({
          class_id:{
            type: "int",
            min: 0,
            max: 300,
            message: "class_id is required and must be an integer between 0 and 300, inclusive."
          },
 
          learner_id:{
            type: "int",
            min: 0,
            message: "learner_id is required and must be an integer greater than or equal to 0."
          }
        },    

      validationAction: "warn";

  learnerSchema.index({ class_id: 1});

  learnerSchema.index({ learner_id: 1});

  learnerSchema.index({ learner_id: 1,  class_id: 1});
 ),


export default mongoose.model("Learner", learnerSchema);







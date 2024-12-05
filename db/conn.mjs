import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.ATLAS_URI);

await mongoose.connect('mongodb://   /test')

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;

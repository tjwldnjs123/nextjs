import { MongoClient } from "mongodb";

// /api/new-meetup
//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://zioni:ODhO39e0WvWbe9KV@cluster0.zk2cbzs.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");
    const res = await meetupsCollections.insertOne(data);
    console.log(res);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

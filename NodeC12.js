const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url).then((client) => {
  const db = client.db("mashupdbs");
  const sampleRegistrations = [
    { name: "John", city: "Trivandrum" },
    { name: "Deepak", city: "Kollam" },
    { name: "Dean", city: "Trivandrum" },
    { name: "Rahul", city: "Calicut" },
    { name: "Ashwin", city: "Calicut" },
    { name: "Rolly", city: "Alleppy" },
    { name: "Nikhil", city: "Kottayam" },
    { name: "Raymond", city: "Trivandrum" },
    { name: "Dean", city: "Calicut" },
  ];

  return db
    .collection("registrations")
    .insertMany(sampleRegistrations)
    .then((res) => {
      console.log("Number of documents inserted: " + res.insertedCount);
      client.close();
    });
});
MongoClient.connect(url)
  .then((client) => {
    const db = client.db("mashupdbs");
    const myquery = { name: "John" };
    const newvalues = { $set: { name: "Johnny", city: "Chennai" } };

    return db
      .collection("registrations")
      .updateOne(myquery, newvalues)
      .then((res) => {
        console.log("1 document updated");
        client.close();
      });
  })
  .catch((err) => {
    console.error(err);
  });

MongoClient.connect(url)
  .then((client) => {
    const db = client.db("mashupdb");
    return db
      .collection("registrations")
      .find({})
      .toArray()
      .then((result) => {
        console.log(result);
        client.close();
      });
  })
  .catch((err) => {
    console.error(err);
  });

const client = new MongoClient(url);

client
  .connect()
  .then(() => {
    const db = client.db("mashupdb");
    const coll = db.collection("registrations");
    const myquery = { name: /^D/ };

    return coll.deleteMany(myquery).then((result) => {
      console.log("Number of documents deleted: " + result.deletedCount);
      client.close();
    });
  })
  .catch((err) => {
    console.error(err);
    client.close();
  });

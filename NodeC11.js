const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url).then((client) => {
  const db = client.db("mashupdb");
  const myobj = [
    { name: "Arjun", city: "Kannur" },
    { name: "Meera", city: "Kochi" },
    { name: "Lakshmi", city: "Calicut" },
  ];

  return db
    .collection("leads")
    .insertMany(myobj)
    .then((res) => {
      console.log("Number of documents inserted: " + res.insertedCount);
      client.close();
    });
});

MongoClient.connect(url)
  .then((client) => {
    const db = client.db("mashupdb");
    return db
      .collection("leads")
      .findOne({ city: "Kochi" })
      .then((result) => {
        console.log(result);
        client.close();
      });
  })
  .catch((err) => {
    console.error(err);
  });

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url).then((client) => {
  const db = client.db("mashupdb");
  const myobj = [
    { name: "John", city: "Trivandrum" },
    { name: "Rahul", city: "Calicut" },
    { name: "Dean", city: "Trivandrum" },
    { name: "Deepak", city: "Kollam" },
    { name: "Ashwin", city: "Calicut" },
    { name: "Rolly", city: "Alleppey" },
    { name: "Nikhil", city: "Kottayam" },
    { name: "Raymond", city: "Trivandrum" },
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
      .find({ city: "Calicut" }, { projection: { _id: 0, name: 1 } })
      .toArray()
      .then((result) => {
        console.log(result);
        client.close();
      });
  })
  .catch((err) => {
    console.error(err);
  });

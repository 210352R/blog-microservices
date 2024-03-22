const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const title = req.body.title;

  posts[id] = {
    id,
    title,
  };

  // Event bus ekata  post created event eka yawanawa
  await axios.post("http://event-bus-srv:4005/events", {
    // Event eke body eka yawanwa request eke body eka
    type: "Postcreated",
    data: { id, title },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Event recieved", req.body.type);
  res.send({});
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

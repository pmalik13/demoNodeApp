const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/", (req, res) => res.json({ message: "Docker is easy" }));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "tshirt",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  } else {
    res.send({
      tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });
  }
});

app.get("/home", (req, res) => {
  res.json({ message: "this is home page" });
});

import express from "express";

const app = express();
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
  res.json({ message: "Success", description: "app is running properly" });
});

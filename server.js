const express = require("express");
const server = express();

server.disable("x-powered-by");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  return res.status(200).json({ success: true, message: "ALIVE" })
})

server.listen(90, async () => {
  console.log(`[BOOT]: Server is running on port 90.`);
});
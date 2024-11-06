const http = require("http");
const taskRoutes = require("./routes/taskRoutes");

const HOSTNAME = "localhost";
const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/tasks")) {
    taskRoutes(req, res);
  } else {
    res.writeHead(404, "Not Found", { "contant-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Sorry, Page not found!",
      })
    );
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`listening on port ${PORT}`);
});

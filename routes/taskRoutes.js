const taskRoutes = (req, res) => {
  if (req.method === "GET") {
    getTasks(req, res);
  } else if (req.method === "POST") {
    createTask(req, res);
  } else if (req.method === "PATCH") {
    updateTask(req, res);
  } else if (req.method === "DELETE") {
    deleteTask(req, res);
  } else {
    res.writeHead(404, "Data Not Found", {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "Unknown method requested.",
      })
    );
  }
};

module.exports = taskRoutes;
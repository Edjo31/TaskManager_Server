const server = require("./src/app/app");
const port = process.env.PORT | 3001;

server.listen(port, () => {
  console.log("escuchando el puerto", port);
});

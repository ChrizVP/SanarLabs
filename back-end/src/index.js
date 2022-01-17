import config from "./config";
import app from "./app";

function init() {
  try {
    app.listen(config.PORT);
    console.log(`Server on Localhost => ${config.PORT}`);
  } catch (error) {
    console.log(error);
  }
}

init();
const mysqlConnection = require("../src/connection");

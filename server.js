const express = require("express");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// The code below points the server to a series of "route" files. These routes
// give our server a "map" of how to respond when users visit or request data
// from various URLs.
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);



// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});

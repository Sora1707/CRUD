const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const db = require("./database");
const hbsHelper = require("./util/hbs");
const methodOverride = require("method-override");

const DATABASE_FILENAME = "crud_dev";

const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Template Engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        helpers: hbsHelper,
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// override POST method in <form>
app.use(methodOverride("_method"));

// Database
db.connect(DATABASE_FILENAME).then(() =>
    console.log(`Successfully connect to ${DATABASE_FILENAME}`)
);

// Routing
const router = require("./routes");
router(app);

app.listen(port, () => {
    console.log(`CRUD App is listening on port ${port}`);
});

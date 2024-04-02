const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");


// anslutnigns inställningar

const connection = mysql.createConnection({
    host: "localhost",
    user: "mysqltest1",
    password: "password",
    database: "mysqltest1"
});

connection.connect((err) => {
    if (err) {
        console.error("Connection failed: " + err);
        return;
    }

    console.log("Connected to mysql!");
});

// inställningar
const app = express();
const port = 3200;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.get("/", (req, res) => {
    //läs ut befintliga kurser
    connection.query("SELECT * FROM courses ORDER BY id DESC;", (err, rows) => {
        if (err) {
            console.error(err.coursecode);
        }

        res.render("index", {
            error: "",
            rows: rows
        });
    });
});

app.get("/", (req, res) => {
    res.render("index"); // Renderar startsidan
});

app.get("/addCourse", (req, res) => {
    res.render("addCourse", { error: "" }); // Renderar "addCourse" och skickar med en tom sträng för felmeddelandet
});

app.get("/about", (req, res) => {
    res.render("about"); // Renderar om-filen 
});


// skapa nytt inlägg
app.post("/addCourse", (req, res) => {
    let coursename = req.body.coursename;
    let coursecode = req.body.coursecode;
    let syllabus = req.body.syllabus;
    let progression = req.body.progression;
    let error = "";


    // Kontrollera input
    if (coursename != "" && coursecode != "") {
        // Korrekt - lagra i databasen
        connection.query("INSERT INTO courses(coursename, coursecode, syllabus, progression) VALUES (?, ?, ?, ?)", [coursename, coursecode, syllabus, progression], (err, results) => {
            if (err) {
                console.error(err);
                error = "Det uppstod ett fel vid skapande av kursen";
                res.render("addCourse", { error: error }); // Rendera "addCourse" med felmeddelande
            }
            res.redirect("/");
        });
    } else {
        error = "Du måste fylla i namn och meddelande";
        res.render("addCourse", { error: error }); // Rendera "addCourse" med felmeddelande
    }

});

app.get("/delete/:id", (req, res) => {
    let id = req.params.id;

    //radera inlägg
    connection.query("DELETE FROM courses WHERE id=?;", id, (err) => {
        if (err) {
            console.error("err.message");
        }

        //redirekt till startsidan
        res.redirect("/");
    });
});

// Starta
app.listen(port, () => {
    console.log("server started on port: " + port);
});
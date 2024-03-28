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

// SQL Fråga
connection.query("DROP TABLE IF EXISTS courses;", (err, results) => {
    if (err) throw err;

    console.log("Tabllen courses raderad!")
})

connection.query(`CREATE TABLE courses (
   id integer primary key auto_increment,
   coursename varchar(255) not null,
   coursecode varchar(255) not null,
   syllabus varchar(255) not null,
   progression varchar(255) not null,
   posted timestamp default current_timestamp not null)`, (err, results) => {
    if (err) throw err;

    console.log("table courses created: " + results);
});
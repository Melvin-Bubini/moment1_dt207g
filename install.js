const mysql = require("mysql");

// anslutnigns inställningar

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});

connection.connect((err) => {
    if(err) {
        console.error("Connection failed: " + err);
        return;
    }

    console.log("Connected to mysql!");
})
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'dailymoodlog'
});

// routes
app.get("/", (req, res) => {
    res.send('HOME PAGE');
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO users (username, password) VALUES (?,?);', [username, password], (err, result) => {
        if (err) console.log(err);
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ? and password = ?;', [username, password], (err, result) => {
        if (err) {
            res.send(err);
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong Username/Password"});
        }
    });
})

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM log";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.post("/api/insert", (req, res) => {
    const mood = req.body.mood;
    const journal = req.body.journal;

    const sqlInsert = "INSERT INTO log (mood, journal) VALUES (?,?)";
    db.query(sqlInsert, [mood, journal], (err, result) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/:mood", (req, res) => {
    const mood = req.params.mood;
    const sqlDelete = "DELETE FROM log WHERE mood = ?;";
    db.query(sqlDelete, mood, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/api/update", (req, res) => {
    const mood = req.body.mood;
    const journal = req.body.journal;
    const sqlUpdate = "UPDATE log SET journal = ? WHERE mood = ?;";
    db.query(sqlUpdate, [journal, mood], (err, result) => {
        if (err) console.log(err);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
});

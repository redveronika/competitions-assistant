const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('link-to-mongodb', (err, database) => {
    app.listen(7777, () => {
        console.log('listening on 7777');
    });
});

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

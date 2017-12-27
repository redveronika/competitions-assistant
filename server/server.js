require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const webpackDevHelper = require('./server.dev');

const isDev = process.env.NODE_ENV !== 'production';

app.use(bodyParser.urlencoded({ extended: true }));

if (isDev) {
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    app.use(express.static('dist'));
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

MongoClient.connect(process.env.MONGO_DB_URI, () => {
    app.listen(process.env.PORT || 5555, () => {
        console.log(`listening on ${process.env.PORT}`);
    });
});

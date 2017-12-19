const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

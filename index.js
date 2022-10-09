const express = require('express');
const axios = require('axios');
const { json } = require('body-parser');

require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.text());

app.get('/', (req, res) => {

    const headers = { 'Authorization': `${req.headers.authorization}`, 'Content-Type': 'application/json', 'Accept': 'application/json' };

    const query = req.headers.query;

    axios.post(`https://api.monday.com/v2/`, JSON.stringify({'query' : query}), { headers : headers}).then(result => {
        res.send(result.data);
    }).catch(err => console.error(err));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} !`);
});
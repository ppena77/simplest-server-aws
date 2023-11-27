const express = require('express');

const app = express();
const port = 3666;

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`Listenging in port ${port}`));
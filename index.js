const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log('Similar proxy listening on port ' + port));
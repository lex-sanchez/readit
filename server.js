const express = require('express');
const api = require('./api/routes/testAPI');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api', api);

app.listen(3001, () => console.log('listening on port 3001'));

module.exports = {
    app
};
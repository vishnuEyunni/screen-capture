
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

const publicPath = path.resolve(__dirname, 'public');

app.use('/', express.static(publicPath));

app.listen(port, () => {
    console.log(`app listening on port.. ${port}`);
});

const http = require('http');
const path = require('path');
const express = require('express');

let app = express();
app.use('/', express.static('./dist'));
app.use('/vue-admin/static', express.static('./dist/static'));


http.createServer(app).listen(3600, function() {
    console.log("Listening on port " + 3600);
}).on('error', function(e) {
    if (e) {
        console.error(e);
    }
});
const next = require('next');
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path')

const httpPort = 5555;
const httpsPort = 443;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
    key: fs.readFileSync(path.resolve(__dirname, './clubwerchow.com.key')),
    cert: fs.readFileSync(path.resolve(__dirname, './clubwerchow.com.crt')),
};

app.prepare().then(() => {


    server.all('*', (req, res) => {
        if (req.secure) {
            // OK, continue
            return handle(req, res)
        };
        // handle port numbers if you need non defaults
        // res.redirect('https://' + req.host + req.url); // express 3.x
        res.redirect('https://' + req.hostname + req.url); // express 4.x
    })

    http.createServer(server).listen(httpPort);
    https.createServer(options, server).listen(httpsPort);
});





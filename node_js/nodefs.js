
const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        fs.readFile("page/home.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        fs.readFile("page/about.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if (req.url === "/create-file") {
        res.writeHead(200, { "content-type": "text/html" });
        const data="<h1>This is test file</h1>";
        for(let i=0;i<100000;i++){
            fs.appendFile("temp/test.html", data, (err) => {//append file
                if (err) throw err;
        });
           }
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        fs.readFile("page/404.html", "utf-8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }

});
server.listen(PORT);
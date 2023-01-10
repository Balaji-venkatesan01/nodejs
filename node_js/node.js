//server
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
       res.write('<h1> hello</h1>')
       res.end();
    }
    if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write('<h1>i am about page</h1>')
        res.end()
    } else {
        res.writeHead(404, { "content-type": "text/html"});
        res.write('<h1>page not found</h1>')     
       res.end()
    }
});
console.log(`server is running in http://localhost:${PORT}`);
server.listen(PORT);
 

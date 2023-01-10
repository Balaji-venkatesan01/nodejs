const http=require("http");
const PORT=3001;
const server=http.createServer((res,req)=>{
    res.write("hello world");

});
console.log(`server at http://localhost:${PORT}`);
server.listen(PORT);
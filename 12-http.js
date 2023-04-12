const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url === '/'){
res.end('<h1 style="color:red">welcome to node</h1>')
return
}
if(req.url === '/joseph'){
    res.end('<h1 style="color:red">omg Joseph is so awesome </h1>')
return
}

res.end(`<h1 style="color:red">asshole ${req.url.replace('/','')} you are at wrong place fuck you </h1>`)
return
})
server.listen(5001)
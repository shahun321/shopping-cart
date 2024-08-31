var http=require('http')
var fs=require('fs')
var url=require('url')


http.createServer(function (req,res){
    var q=url.parse(req.url,true)
    if(q.pathname==='/'){
    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}else if(q.pathname==='/login'){
    fs.readFile('login.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
})
}else if(q.pathname==='/loginaction'){

    console.log(q.query)
    res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>'+q.query.lname+ '</h1>')
        res.end()
}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write("Nee cheythath thett")
    res.end()
}
}).listen(7000)


const http=require('http')
const {readFileSync}=require('fs')

const homepage=readFileSync('./home.html')
const aboutpage=readFileSync('./about.html')
    //home page
//creating a server
 const server= http.createServer((req,res)=>{
    
    const url=req.url;
    console.log('user hit browser')
    
    if (url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else if (url==='/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(aboutpage)
        res.end()
    }
    else
    {
        res.writeHead(400,{'content-type':'text/html'})
        res.write('the page is not available')
        res.end()
    }

})
server.listen(5000)
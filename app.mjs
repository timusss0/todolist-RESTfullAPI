import http, { createServer } from "http"

const server = createServer( () =>{
    Response.write("TodoList API")
    Response.end()
})

server.listen(3000)
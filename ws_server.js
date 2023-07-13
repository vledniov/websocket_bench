import { WebSocketServer } from "ws";

const server = new WebSocketServer({port: 9090})

let counter = 0;
server.on("connection", ws => {
    counter++
    console.log("client %s connected", counter)

    ws.on("error", console.error)

    ws.on("message", data => {
        server.clients.forEach(client => {
            client.send("Client number " + counter + " had connected")
        });
        console.log("message received: %s", data)
    })
})

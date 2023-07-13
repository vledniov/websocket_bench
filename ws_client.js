import { WebSocket } from "ws";

const sleep = ms => new Promise(r => setTimeout(r, ms));

for (let i=0; i<Infinity; i++) {
    initiateClient()
    await sleep(50)
}

async function initiateClient() {
    const client = new WebSocket("ws://server:3000/cable");

    client.on("error", console.error)

    client.on("open", () => {
        client.send(JSON.stringify({command: "subscribe", identifier: JSON.stringify({channel: "RoomChannel"})}))
    })

    client.on("message", data => {
        console.log("received: %s", data)
    })
}
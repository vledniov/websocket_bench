import { WebSocket } from "ws";

const sleep = ms => new Promise(r => setTimeout(r, ms));

for (let i=0; i<Infinity; i++) {
    initiateClient()
    await sleep(50)
}

async function initiateClient() {
    const client = new WebSocket("ws://server:9090");

    client.on("error", console.error)

    client.on("open", () => {
        client.send("I have connected !")
    })

    client.on("message", data => {
        console.log("received: %s", data)
    })
}
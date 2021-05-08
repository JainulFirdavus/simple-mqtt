const express = require('express');
const app = express();
// const mosca = require('mosca');
const CONFIG = { PORT: 3010 }
var mqtt = require('mqtt');

var mqtt_url = "mqtt://localhost";
var mqtt_port = 1883;


// var client = mqtt.connect(mqtt_url, { connectTimeout: 1000, debug: true });
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})
client.on('error', function (e) {
    console.log("ERROR", e)
    client.end()
})
try {
    app.listen(CONFIG.PORT, function () { console.log("connected to ", CONFIG.PORT); })
} catch (ex) {
    console.log("Server not connectede", ex);
}
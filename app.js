const express = require('express');
const app = express();
// const mosca = require('mosca');
const CONFIG = { PORT: 3010 }
var mqtt = require('mqtt');

var mqtt_url = "mqtt://localhost";
var mqtt_port = 1883;

// var client = mqtt.connect(mqtt_url, { connectTimeout: 1000, debug: true });
var client = mqtt.connect('mqtt://test.mosquitto.org')

require('./broker')(app, client);



try {
    app.listen(CONFIG.PORT, function () { console.log("connected to ", CONFIG.PORT); })
} catch (ex) {
    console.log("Server not connectede", ex);
}
'use strict';
module.exports = function (app, client) {

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
}
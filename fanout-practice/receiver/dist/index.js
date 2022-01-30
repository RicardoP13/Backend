"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib/callback_api");
amqp.connect({
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
}, function (err, conn) {
    if (err) {
        throw err;
    }
    conn.createChannel(function (err1, ch) {
        if (err1) {
            throw err1;
        }
        const exchangeName = 'myExchange';
        ch.assertExchange(exchangeName, 'fanout', { durable: false });
        const q = ch.assertQueue('', { exclusive: true, });
        ch.bindQueue(q.queue, exchangeName, '');
        console.log('Waiting for messages in queue');
        ch.consume(q.queue, function (msg) {
            if (msg.content)
                console.log('The message is: ', msg.content.toString());
        }),
            { noAck: true };
    });
});
//# sourceMappingURL=index.js.map
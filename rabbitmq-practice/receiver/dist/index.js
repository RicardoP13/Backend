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
        const queue = 'hello';
        ch.assertQueue(queue, {
            durable: false,
        });
        console.log('waiting for messages...');
        ch.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }),
            { noAck: true };
    });
    /*setTimeout(function () {
        conn.close();
        process.exit(0);
     }, 500);*/
});
//# sourceMappingURL=index.js.map
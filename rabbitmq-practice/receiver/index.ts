import amqp = require("amqplib/callback_api");

amqp.connect(
  {
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
  },
  function (err: any, conn: any) {
    if (err) {
      throw err;
    }

    conn.createChannel(async function (err1: any, ch: any) {
      if (err1) {
        throw err1;
      }
      
      const queue = 'hello';

      ch.assertQueue(queue, {
        durable: false,
      });
      console.log('waiting for messages...');
      await ch.consume(queue, function (msg: any) {
        ch.ack(msg);
        console.log(" [x] Received %s", msg.content.toString());
      }),
        { noAck: true }
    });

    /*setTimeout(function () {
        conn.close();
        process.exit(0);
     }, 500);*/
  }
);

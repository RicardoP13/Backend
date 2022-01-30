import amqp = require("amqplib/callback_api");

amqp.connect(
  {
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
  },
  function (error: any, connection: any) {
    if (error) {
      throw error;
    }

    connection.createChannel(function (error1: any, ch: any) {
      if (error1) {
        throw error1;
      }
      const queue = "hello";
      const message = "word";

      ch.assertQueue(queue, { 
        durable: false 
      });

      ch.sendToQueue(queue, Buffer.from(message));

      console.log(" [x] Sent %s", message);
    });

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);

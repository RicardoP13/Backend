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

      const exchangeName = 'myExchange';
      const message = 'My message exchange';

      ch.assertExchange(
        exchangeName, 
        'fanout', 
        {durable: false}
      );

      ch.publish(
        exchangeName,
        '', 
        Buffer.from(message));

      console.log('Sent: ', message);
    });

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);

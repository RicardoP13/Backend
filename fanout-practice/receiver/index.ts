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

    conn.createChannel(function (err1: any, ch: any) {
      if (err1) {
        throw err1;
      }
      
      const exchangeName = 'myExchange';

      ch.assertExchange(
        exchangeName, 
        'fanout', 
        {durable: false}
      );

      const q = ch.assertQueue(
        '', 
        {exclusive: true,}
      );

      ch.bindQueue(
        q.queue, 
        exchangeName, 
        ''
      );
      console.log('Waiting for messages in queue');

      ch.consume(q.queue, function (msg: any) {
        if(msg.content) console.log('The message is: ', msg.content.toString());
      }),
        { noAck: true }
    });
  }
);

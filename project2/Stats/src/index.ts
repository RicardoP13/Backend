import amqp = require("amqplib/callback_api");

import axios from 'axios';


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
      
      const exch = "exchange";
      const qname = "attendance";
      const rkey = "mykey";

      ch.assertExchange(exch, 'direct',{durable: true});

      const q = ch.assertQueue(
        qname, 
        {durable: true}
      );

      console.log('Waiting for messages in queue');

      ch.consume(q.queue, async function (msg: any) {
        ch.ack(msg);
        if(msg.content) {
          const attendance = JSON.parse(msg.content.toString())  
          const listAttendances = await getAttendances(attendance.idUser);
          await newAttendance(attendance.idUser,listAttendances.length)
          console.log('element consumed')
        }
      }),
        { noAck: true }
    });
  }
);

function newAttendance(id: string, length: any){
  return axios
   .patch(`http://localhost:3001/users/`,{id: id,attendances : length})
   .then((res) => res.data.data)
   .catch((err) => console.log(err))
}

async function getAttendances(userId: string) {
  return axios
   .get(`http://localhost:3000/attendance/?id=${userId}`)
   .then((res) => res.data.data)
   .catch((err) => console.log(err))
}


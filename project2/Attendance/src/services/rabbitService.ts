import amqp = require("amqplib");

async function connect(){
  const conn = await amqp.connect({
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
  });
  return conn;
}

async function configRabbit(conn: any){
  const ch = await conn.createChannel();
  const exch = "exchange";
  const q = "attendance";
  const rkey = "mykey";
  await ch
    .assertExchange(exch, "direct", { durable: true })
    .catch(console.error);
  await ch.assertQueue(q, { durable: true });
  await ch.bindQueue(q, exch, rkey);

  return {ch,exch,rkey}
}

async function publish(attendance: any): Promise<boolean | Error> {
  try {
    const conn = await connect();
    const {ch,exch,rkey} = await configRabbit(conn);
    await ch.publish(exch, rkey, Buffer.from(JSON.stringify(attendance)));
    setTimeout(function () {
      ch.close();
      conn.close();
    }, 500);
    return true;
  } catch(error: any) {
    console.log(error);
    return error;
  }
}

export default publish;

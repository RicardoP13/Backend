"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib/callback_api");
const axios_1 = __importDefault(require("axios"));
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
        const exch = "exchange";
        const qname = "attendance";
        const rkey = "mykey";
        ch.assertExchange(exch, 'direct', { durable: true });
        const q = ch.assertQueue(qname, { durable: true });
        console.log('Waiting for messages in queue');
        ch.consume(q.queue, function (msg) {
            return __awaiter(this, void 0, void 0, function* () {
                ch.ack(msg);
                if (msg.content) {
                    const attendance = JSON.parse(msg.content.toString());
                    const listAttendances = yield getAttendances(attendance.idUser);
                    yield newAttendance(attendance.idUser, listAttendances.length);
                    console.log('element consumed');
                }
            });
        }),
            { noAck: true };
    });
});
function newAttendance(id, length) {
    return axios_1.default
        .patch(`http://localhost:3001/users/`, { id: id, attendances: length })
        .then((res) => res.data.data)
        .catch((err) => console.log(err));
}
function getAttendances(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default
            .get(`http://localhost:3000/attendance/?id=${userId}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err));
    });
}
//# sourceMappingURL=index.js.map
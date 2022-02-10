import path from 'path';

export default {
  API_PORT: 3000,
  DB_NAME: 'backendDB',
  DB_USER: 'root',
  DB_PASSWORD: 'secret',
  DB_HOST: 'localhost',
  DB_PORT: 3306,
  DB_TYPE: 'mysql',
  DB_ENTITIES: [path.join(__dirname, '../entities/*.entity.js')],
  DB_SYNCRO: true
};

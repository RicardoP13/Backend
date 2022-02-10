import { createConnection } from 'typeorm';
import config from '../config/configORM';

export default class DatabaseConnection {
  
  private DB_USER = config.DB_USER;
  private DB_PASSWORD = config.DB_PASSWORD;
  private DB_HOST = config.DB_HOST; 
  private DB_PORT = config.DB_PORT;
  private DB_TYPE = config.DB_TYPE;
  private DB_NAME = config.DB_NAME;
  private DB_ENTITIES = config.DB_ENTITIES;
  private DB_SYNCRO = config.DB_SYNCRO;
  private connection;

  constructor() {
    try {
      this.connection = createConnection({
        type: 'mysql',
        host: this.DB_HOST,
        port: this.DB_PORT,
        username: this.DB_USER,
        password: this.DB_PASSWORD,
        database: this.DB_NAME,
        entities: this.DB_ENTITIES,
        synchronize: this.DB_SYNCRO
      });
    } catch (error) {
      throw new Error(`Unable to connect to the database: ${error}`);
    }
  }
  async testConnection(): Promise<string> {
    try {
      console.log({
        type: 'mysql',
        host: this.DB_HOST,
        port: this.DB_PORT,
        username: this.DB_USER,
        password: this.DB_PASSWORD,
        database: this.DB_NAME,
        entities: this.DB_ENTITIES,
        synchronize: this.DB_SYNCRO
      });
      const testConnection = await createConnection({
        type: 'mysql',
        host: this.DB_HOST,
        port: this.DB_PORT,
        username: this.DB_USER,
        password: this.DB_PASSWORD,
        database: this.DB_NAME,
        entities: this.DB_ENTITIES,
        synchronize: this.DB_SYNCRO
      });
      testConnection.close();

      return 'Test Connection has been established successfully.';
    } catch (error) {
      return `Unable to connect to the database: ${error}`;
    }
  }
}

import * as mapepire from "@ibm/mapepire-js";
import {DaemonServer} from "@ibm/mapepire-js/dist/src/types"

export default class {
  private static pool: mapepire.Pool;

  static async connect(server: DaemonServer) {
    const ca = await mapepire.getCertificate(server);
    server.ca = ca.raw;

    this.pool = new mapepire.Pool({creds: server, maxSize: 5, startingSize: 1});
    await this.pool.init();
  }

  /**
   * @throws Will crash if query is invalid
   */
  /*
  static query<T>(statement: string, bindingsValues: (number|string)[] = []): Promise<T[]> {
    return this.pool.query(statement, bindingsValues) as Promise<T[]>;
  }
  */
  static async query<T>(statement: string, bindingsValues: (number|string)[] = []) {
    return this.pool.execute(statement, {parameters: bindingsValues});
  }
}

export const DatabaseServer: DaemonServer = {
  host: process.env.DB_HOST!,
  user: process.env.DB_ID!,
  password: process.env.DB_PASSWORD!,
  ignoreUnauthorized: true,
}
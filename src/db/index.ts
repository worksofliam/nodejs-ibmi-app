import odbc from "odbc";

export default class {
  private static pool: odbc.Pool;

  static async connect(connectionString: string) {
    this.pool = await odbc.pool(connectionString);
  }

  /**
   * @throws Will crash if query is invalid
   */
  static async query<T>(statement: string, bindingsValues: (number|string)[] = []) {
    console.log(this.pool);
    return this.pool.query(statement, bindingsValues);
  }

  static async callProcedure<T>(catalog: string|null, library: string, procedure: string, bindingsValues: (number|string)[] = []) {
    const connection = await this.pool.connect();
    console.log(this.pool);
    return connection.callProcedure(catalog, library, procedure, bindingsValues);
  }
}

export const connectionString = [
  `DRIVER=IBM i Access ODBC Driver`,
  `SYSTEM=${process.env.DB_HOST}`,
  `UID=${process.env.DB_ID}`,
  `Password=${process.env.DB_PASSWORD}`,
  `Naming=1`,
  `DBQ=,${process.env[`DB_DBQ`] ? process.env[`DB_DBQ`] : `*USRLIBL`}`,
].join(`;`);
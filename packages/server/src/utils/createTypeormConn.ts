import { getConnectionOptions, createConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  // return createConnection({ ...connectionOptions, name: "default" });
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL,
        name: "default"
      } as any)
: createConnection({ ...connectionOptions, name: "default" });
};

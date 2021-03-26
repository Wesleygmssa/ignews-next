import { Client } from "faunadb";

//Acesso banco de dados ok
export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});

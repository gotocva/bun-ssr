import { Database } from "bun:sqlite";
export const db = new Database("mydb.sqlite", { create: true });
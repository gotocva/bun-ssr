import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';




export const app = new Elysia();


app.use(cors());
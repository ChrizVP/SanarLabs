import { config } from "dotenv";

config();
export default {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  NAME_DATABASE: process.env.NAME_DATABASE,
};

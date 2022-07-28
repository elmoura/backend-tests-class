import 'dotenv/config';
import 'reflect-metadata';
import './database/connection';
import express from 'express';
import { routes } from './routes';

console.log('url => ', process.env.DB_URL)

const app = express()

app.use(express.json())
app.use(routes)

export { app };
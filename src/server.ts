import express, { Request, Response } from 'express';

const app = express();

app.use('/', (request: Request, response: Response) => response.json('test'));

app.listen(3333);

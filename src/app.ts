import express from "express";
import swaggerUi  from 'swagger-ui-express';
import { router } from "./routes";
import swaggerDocs from './swagger.json';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(router);
app.use(session({
    secret: 'api',
    cookie: { secure: true }
}))
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };

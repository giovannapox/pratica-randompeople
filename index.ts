import express, { Request, Response } from "express";
import router from "./src/routes/index.routes";

const app = express();
app.use(router);
app.get("/health", (req: Request, res: Response) => res.status(200).send("I'm Ok!"));

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
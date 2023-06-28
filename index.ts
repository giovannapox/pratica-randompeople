import express from "express";
import router from "./src/routes/index.routes";

const app = express();
app.use(router);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
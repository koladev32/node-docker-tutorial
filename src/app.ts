import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import menuRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 8000;

app.use(cors());
app.use(menuRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    ).catch(error => {
        throw error
})

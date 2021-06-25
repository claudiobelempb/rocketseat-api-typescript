import express from 'express';
import { categoriesRoutes } from './routes/categoriesRoutes';

const app = express();
app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log(`Server in running port 3333`));

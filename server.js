import express from 'express';
import routeController from './routes/index';

const app = express();
app.use(express.json());
routeController(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import accountsRoute from './routes/accounts.js';

const app = express();
app.use(bodyParser.json());

app.use('/', accountsRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


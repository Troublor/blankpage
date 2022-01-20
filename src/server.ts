import express from 'express';
import page from './page';

const app = express();
const host = '0.0.0.0';
const port = 8080;

app.get('/', (req, res) => {
    res.send(page);
});

app.listen(port, host, () => {
    console.log(`Http server started at http://${host}:${port}`);
});
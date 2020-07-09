const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/hello', (req, res) => res.json({ message: 'Hello' }));
app.get('/world', (req, res) => res.json({ message: 'World' }));

console.log('Express is running...');
app.listen(3000);

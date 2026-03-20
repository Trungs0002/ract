const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/products');
const { connectToDb } = require('./db/connection');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/message', (req, res) => {
	res.json({ message: 'Hello World!' });
});

app.get('/get/data', (req, res) => {
	res.json('this is data from the server');
});

app.get('/products/json', (req, res) => {
	res.json(products);
});

app.get('/cars', async (req, res) => {
	try {
		const db = await connectToDb();
		const cars = await db.collection('car').find({}).toArray();
		res.json(cars);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'; // Przenieś import cors tutaj

const app = express();
app.use(cors()); // Teraz można bezpiecznie użyć app, ponieważ został zainicjalizowany

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.userData.email === null ||
    !orderData.userData.email.includes('@') ||
    orderData.userData.name === null
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.post('/logins', async (req, res) => {
  const loginData = req.body.order;

  if (loginData === null || loginData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    loginData.loginData.emailLogin === null ||
    loginData.loginData.passwordLogin === null
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newLogin = {
    ...loginData,
    id: (Math.random() * 1000).toString(),
  };
  const logins = await fs.readFile('./data/logins.json', 'utf8');
  const allLogins = JSON.parse(logins);
  allLogins.push(newLogin);
  await fs.writeFile('./data/logins.json', JSON.stringify(allLogins));
  res.status(201).json({ message: 'Login created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);

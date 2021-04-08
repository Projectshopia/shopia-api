import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({'message': 'Welcome to shopia api'});
});

export default app;
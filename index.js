const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to MongoDB');
  }
);

const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.listen(8800, () => {
  console.log('Backend server is running!');
});

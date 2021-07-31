const express = require('express');
const { errorLogger } = require('express-winston');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');
const limiter = require('./middlewares/limiter');
const { requestLogger } = require('./middlewares/logger');

const app = express();

const { PORT = 3000 } = process.env;

const start = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

start();

app.use(requestLogger);
app.use(limiter);
app.use(helmet());

app.use(errorLogger);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

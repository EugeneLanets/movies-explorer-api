const express = require('express');
const { errorLogger } = require('express-winston');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { MONGO_URL } = require('./config');
const limiter = require('./middlewares/limiter');
const { requestLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const routes = require('./routes');

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

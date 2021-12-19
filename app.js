const express = require('express');
const { errorLogger } = require('express-winston');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {
  MONGO_URL, NODE_ENV, MONGO_OPTIONS, CORS_OPTIONS, PORT,
} = require('./config');
const limiter = require('./middlewares/limiter');
const { requestLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const routes = require('./routes');

const app = express();

const start = async () => {
  await mongoose.connect(MONGO_URL, MONGO_OPTIONS);
};

start();

app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
});

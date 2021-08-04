require('dotenv').config();

const {
  NODE_ENV = 'development',
  JWT_SECRET = 'JWT_SECRET',
  MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb',
  PORT = 3000,
} = process.env;

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const LIMITER_OPTIONS = {
  windowMs: 15 * 60 * 1000,
  max: 100,
};

const CORS_OPTIONS = {
  origin: [
    'http://localhost:3000',
    'http://mexplorer.nomoredomains.club',
    'https://mexplorer.nomoredomains.club',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = {
  JWT_SECRET,
  MONGO_URL,
  MONGO_OPTIONS,
  NODE_ENV,
  LIMITER_OPTIONS,
  CORS_OPTIONS,
  PORT,
};

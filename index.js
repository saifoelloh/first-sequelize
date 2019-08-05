const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_CONNECTION,
  APP_PORT,
} = process.env;
const app = express();
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: `${DB_HOST}:${DB_PORT}`,
  dialect: DB_CONNECTION,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`);
  });

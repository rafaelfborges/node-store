require('dotenv').config()

global.SALT_KEY = process.env.SALT_KEY;
global.EMAIL_TMPL = process.env.EMAIL_TMPL;

module.exports = {
  connectionString: process.env.MONGO_URL_CONNECTION,
  sendgridKey: process.env.SEND_GRID_KEY,
  containerConnectionString: process.env.CONTAINER_CONN_STRING
}
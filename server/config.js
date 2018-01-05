// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'https://pixelengine-auth.auth0.com/', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://meantester2:subzero69tv@ds143907.mlab.com:43907/mean'
};

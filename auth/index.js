const jwt = require('jsonwebtoken');
const config = require('../config')
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret)
}

function verify(token) {
  return jwt.verify(token, secreto)
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader();
    console.log(decoded);
  },
}

function getToken(auth) {
  if (!auth) {
    throw new Error('No Token.')
  }
  if (auth.indexOf('Bearer') === -1) {
    throw new Error('Invalid format.');
  }
  let token = auth.replace('Bearer', '')
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
}
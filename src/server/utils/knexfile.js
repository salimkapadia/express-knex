const path = require("path");

process.env['NODE_CONFIG_DIR'] = (undefined == process.env.NODE_CONFIG_DIR) ?  path.resolve(path.join(__dirname, '../config')) : process.env.NODE_CONFIG_DIR;
process.env['NODE_ENV'] = (undefined == process.env.NODE_ENV) ? 'default' : process.env.NODE_ENV;

console.log("Using environment: " + process.env['NODE_ENV']);
console.log("Using config path: " + process.env['NODE_CONFIG_DIR']);

const config = require('config');
module.exports = config.get("database");

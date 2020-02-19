const db = require('../data/dbConfig.js');

function find() {
    return db('schemes');
}
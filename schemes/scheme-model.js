const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove
};

// find all schemes
function find() {
    return db('schemes');
}

// find scheme by id
function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

// function findSteps(id) {
//     return db('schemes')
//         .where
// }

// create a new scheme
function add(scheme) {
    return db('schemes').insert(scheme, 'id');
}

// update a scheme
// function update(id, changes) {
//     return db('schemes')
//         .where({ id })
//         .update(changes);
// }

function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}
const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findSteps
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

// find the steps of a specific scheme by its scheme id
function findSteps(id) {
    return db('schemes as sc')
        .join('steps as st', 'st.scheme_id', 'sc.id')
        .select('st.step_number', 'st.instructions')
        .where('sc.id', id)
}

// create a new scheme
function add(scheme) {
    return db('schemes').insert(scheme, 'id');
}

// update a scheme
function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes);
}

// remove a scheme
function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}
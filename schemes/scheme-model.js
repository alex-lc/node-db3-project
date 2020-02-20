const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findSteps,
    addStep
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

// create a new step for a scheme using its scheme id
function addStep(stepData, scheme_id) {
    const stepInfo = { ...stepData, scheme_id: Number(scheme_id) }
    return db('steps').insert(stepInfo, 'id');
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
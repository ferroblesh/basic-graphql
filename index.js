'use strict'

const {graphql, buildSchema} = require('graphql');

//define init schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

//query hello
graphql(schema, '{ hello }').then(data => {
    console.log(data);
})
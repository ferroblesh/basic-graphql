'use strict'

const {graphql, buildSchema} = require('graphql');

//define init schema
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

// config resolver
const resolvers = {
    hello: () => 'Hola Mundo',
    saludo: () => 'Hola a todos',
}

//query hello
graphql(schema, '{ hello saludo }', resolvers).then(data => {
    console.log(data);
})
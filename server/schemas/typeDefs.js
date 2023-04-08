const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        _id: ID
        name: String
        description: String
        image: String
        github: String
        deployed: String
        technologies: [String]
    }

    type Blog {
        _id: ID
        title: String
        description: String
        image: String
        content: String
        date: String
    }

`;

module.exports = typeDefs;

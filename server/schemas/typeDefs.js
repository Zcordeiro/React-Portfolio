const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        _id: ID
        title: String
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

    type Query {
        projects: [Project]
        blogs: [Blog]
    }

    type Mutation {
        addProject(title: String!, description: String!, image: String!, github: String!, deployed: String!, technologies: [String]!): Project
        addBlog(title: String!, description: String!, image: String!, content: String!): Blog
    }


`;

module.exports = typeDefs;

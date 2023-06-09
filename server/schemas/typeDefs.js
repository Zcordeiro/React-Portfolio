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
        singleProject(_id: ID!): Project
        blogs: [Blog]
        singleBlog(_id: ID!): Blog
    }

    type Mutation {
        addProject(title: String!, description: String!, image: String!, github: String!, deployed: String!, technologies: [String]!): Project
        updateProject(_id: ID!, title: String!, description: String!, image: String!, github: String!, deployed: String!, technologies: [String]!): Project
        addBlog(title: String!, description: String!, image: String!, content: String!): Blog
        updateBlog(_id: ID!, title: String!, description: String!, image: String!, content: String!): Blog
        deleteProject(_id: ID!): Project
        deleteBlog(_id: ID!): Blog
    }
`;

module.exports = typeDefs;

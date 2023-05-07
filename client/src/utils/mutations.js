import { gql } from '@apollo/client';

export const CREATE_PROJECTS = gql`
    mutation addProject($title: String!, $description: String!, $image: String!, $github: String!, $deployed: String!, $technologies: [String]!) {
        addProject(title: $title, description: $description, image: $image, github: $github, deployed: $deployed, technologies: $technologies) {
            _id
            title
            description
            image
            github
            deployed
            technologies
        }
    }
`;

export const CREATE_BLOGS = gql`
    mutation addBlog($title: String!, $description: String!, $image: String!, $content: String!) {
        addBlog(title: $title, description: $description, image: $image, content: $content) {
            _id
            title
            description
            image
            content
            date
        }
    }
`;

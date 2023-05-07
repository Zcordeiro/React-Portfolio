import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
    query projects {
        projects {
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

export const QUERY_SINGLE_PROJECT = gql`
    query singleProject($id: ID!) {
        singleProject(_id: $id) {
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

export const QUERY_BLOGS = gql`
    query blogs {
        blogs {
            _id
            title
            description
            image
            content
            date
        }       
    }
`;
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
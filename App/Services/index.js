import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clskdncdj3qwu01up5h0x7lzu/master";

export const getCourse = async (level) => {
    const query = gql`
    query CourseList {
      courses (where: {level: `+level+`}) {
        createdAt
        name
        time
        tags
        level
        price
        author
        description {
          markdown
        }
        banner{
          url
        }
        id
        chapter {
          ... on Chapter {
            title
            id
            content {
              markdown
            }
            output {
              markdown
            }
            
          }
        }
      }
    }
    
      `;     
    const data = await request(MASTER_URL, query);
    return data;
}   
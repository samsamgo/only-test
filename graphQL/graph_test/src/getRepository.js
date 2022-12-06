import { graphql } from '@octokit/graphql';
const { REACT_APP_GITHUB_AGORA_STATES_TOKEN, NODE_ENV } = process.env;


async function getRepository() {
    let token;
    if (NODE_ENV === 'development' || NODE_ENV === 'test') {
        token = REACT_APP_GITHUB_AGORA_STATES_TOKEN;
    }

    const { repository, viewer } = await graphql(
        `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussionCategories(first: 100) {
            edges {
              node {
                id
                name
              }
            }
          }
          discussions(first: 100) {
            edges {
              node {
                category {
                  name
                }
                author {
                  login
                  avatarUrl
                }
                createdAt
                title
                id
                updatedAt
                bodyHTML
                url
                answer {
                  author {
                    login
                    avatarUrl
                  }
                  bodyHTML
                  createdAt
                  id
                }
              }
            }
          }
        },
        viewer{
          login
          avatarUrl
        }
      }
    `,
        {
            headers: {
                authorization: `token ${token}`,
            },
        }
    );
    return { repository, viewer };
}

export default getRepository;
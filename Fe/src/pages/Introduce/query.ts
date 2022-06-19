const query = (slug: string) => {
  return `
    query {
      homepages(where: { slug: "${slug}" }) {
        slug
        sections {
          __typename
          ... on ComponentHomepageBanner {
            link
          }
          ... on ComponentHomepageIntroduce {
            title
            imageList {
              image { url }
            }
          }
          ... on ComponentHomepageNews {
            title
            description
            newsList {
              title
              background{
                url
              }
              description
              readMoreLink
            }
            filters{
              title
            }
       
          ... on ComponentHomepageStore {
            title
            stores {
              storeImage { url }
              link
            }
          }
        }
      }
    }
  `;
};

export default query;

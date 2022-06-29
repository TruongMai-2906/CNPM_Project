const query = (slug: string) => {
  return `
    query {
      homepages(where: { slug: "${slug}" }) {
        slug
        sections {
          __typename
          ... on ComponentHomepageBanner {
            background { url }
            backgroundMobile { url }
            logo { url }
            description
            buttonText
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
              type
              background{
                url
              }
              description
              readMoreLink
            }
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

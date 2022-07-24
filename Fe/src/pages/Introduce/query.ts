const query = (slug: string) => {
  return `
    query {
      homepages(where: { slug: "${slug}" }) {
        slug
        css
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
            description
            background { url }
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
          ... on ComponentHomepageRegister {
            background { url }
            character { url }
          }
        }
      }
    }
  `;
};

export default query;

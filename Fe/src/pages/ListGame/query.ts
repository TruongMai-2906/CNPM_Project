const query = `
  query {
    homepages {
      slug
      name
      thumbnail { url }
    }
  }
`

export default query;
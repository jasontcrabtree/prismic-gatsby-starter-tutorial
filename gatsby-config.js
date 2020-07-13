module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'prismic-gatsby-starter-tutorial', // required
        pages: [
          {
            // optional
            type: 'Page', // TypeName from prismic
            match: '/:uid', // pages will be generated under this pattern
            previewPath: '/preview', // optional path for unpublished documents
            component: require.resolve('./src/templates/Page.js'),
            // sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
          },
        ],
        previews: true, // optional, default: true
        path: '/preview', // optional, default: /preview
        /* defaultLang: 'en-us', // optional, but recommended
        accessToken: '...', // optional
        prismicRef: '...', // optional, default: master; useful for A/B experiments
        extraPageFields: 'article_type', // optional, extends pages query to pass extra fields
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ], */
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '400i', '700', '700i', '900'],
          },
          {
            family: 'Amiri',
            variants: ['400', '400i', '700', '700i'],
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/star.svg',
      },
    },
  ],
};

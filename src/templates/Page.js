import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import SliceZone from '../components/SliceZone';

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            body {
              __typename
              ... on PRISMIC_PageBodyText {
                type
                primary {
                  columns
                  content
                }
              }
              ... on PRISMIC_PageBodyQuote {
                type
                primary {
                  quote
                }
              }
              ... on PRISMIC_PageBodyFull_width_image {
                type
                primary {
                  full_width_image
                }
              }
              ... on PRISMIC_PageBodyImage_gallery {
                type
                primary {
                  gallery_title
                }
                fields {
                  image
                  image_description
                  link {
                    _linkType
                    ... on PRISMIC_Page {
                      _meta {
                        type
                        uid
                      }
                    }
                    ... on PRISMIC_Homepage {
                      _meta {
                        type
                      }
                    }
                  }
                  link_label
                }
              }
              ... on PRISMIC_PageBodyImage_highlight {
                type
                primary {
                  featured_image
                  title
                  description
                  link {
                    _linkType
                    ... on PRISMIC_Page {
                      _meta {
                        type
                        uid
                      }
                    }
                    ... on PRISMIC_Homepage {
                      _meta {
                        type
                      }
                    }
                  }
                  link_label
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0];
  if (!prismicContent) return null;
  const document = prismicContent.node;

  const capitalizeFirstLetter = input => {
    return input[0].toUpperCase() + input.slice(1);
  };

  return (
    <Layout>
      <SEO title={capitalizeFirstLetter(document._meta.uid)} />
      <SliceZone sliceZone={document.body} />
    </Layout>
  );
};

export default Page;

import './src/styles/reset.css';
import './src/styles/common.css';
import './src/styles/style.css';

import { registerLinkResolver } from '@prismicio/gatsby-source-prismic-graphql';
import linkResolver from './src/utils/linkResolver';

registerLinkResolver(linkResolver);

/* const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');

registerLinkResolver(linkResolver); */

/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio(props) {
  const { author, authorSocial } = props;
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { company, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={company}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <a href={`${authorSocial}`}>{author}</a> for the{' '}
              <strong>{company}</strong>
              {` `}
              <br />
              Have a look at our {` `}
              <a href={`${social.github}`}>Github</a>
              {` `}
              profile.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        company
        social {
          github
        }
      }
    }
  }
`;

export default Bio;

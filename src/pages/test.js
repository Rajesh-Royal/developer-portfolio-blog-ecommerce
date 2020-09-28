import * as React from "react";
import { graphql, StaticQuery } from "gatsby";


const HomePage = ({ data }) => {
    return (
        <StaticQuery
            query={graphql`
        query HeadingQuerys {
            allWordpressPost {
                edges {
                node {
                    title
                    excerpt
                    x_featured_media_medium
                    date
                }
                }
            }
        }
      `}
            render={data => (
                <header>
                    <h1>{data.site.siteMetadata.title}</h1>
                </header>
            )}
        />
    );
};

// export const query = graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `;

export default HomePage;
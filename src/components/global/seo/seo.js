import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

import config from "../../../data/config";
import defaultImage from "../../../images/default-opengraph-image.jpg";
import SiteIcon from "../../../images/icon.png";


function SEO({ description, lang, meta, title, image, slug, type, articleBody, dateModified, datePublished }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const ogImage = config.url + image || config.url + defaultImage;
  const siteUrl = `${config.url}${slug}`;

  const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "${title} | ${defaultTitle}",
		"image": "${ogImage}"
    }",
		"datePublished": "${datePublished}",
		"dateModified": "${dateModified}",
		"author": {
			"@type": "Person",
			"name": "${config.author}"
		},
		"articleBody": "${articleBody}",
		"publisher": {
			"@type": "Organization",
			"name": "${config.author}",
			"logo": {
				"@type": "ImageObject",
				"url": "${config.url}${SiteIcon}"
			}
		},
		"description": "${metaDescription}",
		"url": "${config.url}${slug}"
  }`;
  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "${config.legalName}",
		"url": "${config.url}${slug}",
		"logo": "${config.url}${SiteIcon}",
		"foundingDate": "${config.foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${config.legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${config.contact.email}",
			"telephone": "${config.contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${config.address.city}",
			"addressRegion": "${config.address.region}",
			"addressCountry": "${config.address.country}",
			"postalCode": "${config.address.zipCode}"
		},
		"sameAs": [
			"${config.socialLinks.twitter}",
			"${config.socialLinks.facebook}",
			"${config.socialLinks.youtube}",
			"${config.socialLinks.linkedin}",
			"${config.socialLinks.instagram}",
			"${config.socialLinks.github}",
			"${config.socialLinks.reddit}"
		]
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          property: "og:locale",
          content: lang ? lang : "en_US",
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "image",
          content: ogImage,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          property: "og:image:width",
          content: "2500",
        },
        {
          property: "og:image:height",
          content: "1875",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: config.legalName,
        },
        {
          property: "og:url",
          content: siteUrl,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.author || config.social.twitter,
        },
        {
          name: "twitter:title",
          content: `${title} | ${defaultTitle}`,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: ogImage,
        },
        {
          name: "robots",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {type === "NewsArticle"
          ? structuredDataArticle
          : structuredDataOrganization}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

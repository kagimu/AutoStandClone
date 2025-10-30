import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Adobe Technologies Uganda | IT Solutions, Web Development, Graphics & Digital Marketing",
  description = "Adobe Technologies Uganda offers top-tier web design, IT services, graphics, and digital marketing solutions tailored for businesses and individuals across Uganda.",
  keywords = "Adobe Technologies, Uganda, web design, IT services, graphics, hosting, digital marketing, web development Uganda",
  image = "https://adobeitechug.com/Icon.webp",
  url = "https://adobeitechug.com",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (for social media) */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Canonical URL */}
    <link rel="canonical" href={url} />

    {/* Structured Data (Organization Schema) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Adobe Technologies Limited Uganda",
        url: "https://adobeitechug.com",
        logo: "https://adobeitechug.com/Icon.webp",
        sameAs: [
          "https://www.facebook.com/adobeitechug",
          "https://www.instagram.com/adobeitechug",
          "https://twitter.com/adobeitechug"
        ],
      })}
    </script>
  </Helmet>
);

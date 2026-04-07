import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "TEK Inspirations LLC";
const BASE_URL = "https://www.tekinspirations.com";
const DEFAULT_IMAGE = `${BASE_URL}/wp-content/uploads/2024/01/tek-og-image.jpg`;
const TWITTER_HANDLE = "@tekinspirations";
const BUSINESS_LOGO = `${BASE_URL}/wp-content/uploads/2022/01/TEK-Logo.png`;
const BREADCRUMB_LABELS = {
  "who-we-are": "Who We Are",
  "our-leaders": "Our Leaders",
  "our-solutions": "Our Solutions",
  "it-consulting": "IT Consulting",
  "managed-services": "Managed Services",
  rpo: "RPO",
  "software-development": "Software Development",
  contact: "Contact",
  gallery: "Gallery",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  404: "Page Not Found",
};

function toTitleCase(text) {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getBreadcrumbName(segment) {
  return BREADCRUMB_LABELS[segment] || toTitleCase(segment);
}

function buildBreadcrumbJsonLd(canonicalPath) {
  const cleanSegments = canonicalPath.split("/").filter(Boolean);

  if (!cleanSegments.length) {
    return null;
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
  ];

  let runningPath = "";
  cleanSegments.forEach((segment, index) => {
    runningPath += `/${segment}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: getBreadcrumbName(segment),
      item: `${BASE_URL}${runningPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

/**
 * SEOHelmet — Comprehensive per-page SEO component
 *
 * Props:
 *   title         — Page-specific title (will be appended with " | TEK Inspirations LLC")
 *   description   — 150-160 char meta description
 *   canonical     — Canonical URL path (e.g. "/contact")
 *   ogImage       — Open Graph image URL (falls back to default)
 *   ogType        — "website" | "article" (default: "website")
 *   noindex       — If true, adds noindex (for legal/policy pages)
 *   jsonLd        — Optional structured data object (JSON-LD)
 *   keywords      — Array of keywords
 */
function SEOHelmet({
  title,
  description,
  canonical = "/",
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  noindex = false,
  jsonLd = null,
  keywords = [],
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Top IT Staffing & Technology Solutions in USA`;

  const canonicalPath = canonical.startsWith("/") ? canonical : `/${canonical}`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImageAlt = title
    ? `${SITE_NAME} - ${title}`
    : `${SITE_NAME} official image`;
  const defaultKeywords = [
    "IT staffing",
    "technology solutions",
    "IT consulting",
    "managed services",
    "software development",
    "RPO",
    "recruitment process outsourcing",
    "IT services USA",
    "TEK Inspirations",
  ];
  const allKeywords = [...defaultKeywords, ...keywords].join(", ");
  const globalJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: BUSINESS_LOGO,
      sameAs: [
        "https://www.linkedin.com/company/tek-inspirations",
        "https://twitter.com/tekinspirations",
        "https://www.facebook.com/tekinspirations",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-469-555-0100",
          contactType: "customer service",
          areaServed: ["US", "IN"],
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
      inLanguage: "en",
    },
  ];
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    url: canonicalUrl,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
    },
  };
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(canonicalPath);
  const customJsonLd = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const jsonLdPayload = [
    ...globalJsonLd,
    pageJsonLd,
    ...(breadcrumbJsonLd ? [breadcrumbJsonLd] : []),
    ...customJsonLd,
  ];

  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-us" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content="tekinspirations.com" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* ── Geo / Business ── */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Frisco, Texas" />
      <meta name="geo.position" content="33.1507;-96.8236" />
      <meta name="ICBM" content="33.1507, -96.8236" />

      {/* ── JSON-LD Structured Data ── */}
      {jsonLdPayload && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdPayload)}
        </script>
      )}
    </Helmet>
  );
}

export default SEOHelmet;

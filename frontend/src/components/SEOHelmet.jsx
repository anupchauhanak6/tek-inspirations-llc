import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "TEK Inspirations LLC";
const BASE_URL = "https://www.tekinspirations.com";
const DEFAULT_IMAGE = `${BASE_URL}/wp-content/uploads/2024/01/tek-og-image.jpg`;
const TWITTER_HANDLE = "@tekinspirations";

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

  const canonicalUrl = `${BASE_URL}${canonical}`;
  const defaultKeywords = [
    "IT staffing", "technology solutions", "IT consulting", "managed services",
    "software development", "RPO", "recruitment process outsourcing",
    "IT services USA", "TEK Inspirations",
  ];
  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Geo / Business ── */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Frisco, Texas" />
      <meta name="geo.position" content="33.1507;-96.8236" />
      <meta name="ICBM" content="33.1507, -96.8236" />

      {/* ── JSON-LD Structured Data ── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default SEOHelmet;

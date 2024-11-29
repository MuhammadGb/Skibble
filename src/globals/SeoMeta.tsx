"use client";

import { usePathname } from "next/navigation";

interface SeoMetaProps {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: SeoMetaProps) => {
  const pathname = usePathname();

  const defaultTitle = "ShopEase - Your One-Stop Shop";
  const defaultDescription = "Find the best products at unbeatable prices.";
  const defaultAuthor = "ShopEase Team";
  const defaultImage = "/images/default-meta-image.jpg";
  const baseUrl = "https://www.shopease.com";

  const pageTitle = meta_title || title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const imageUrl = image || defaultImage;

  return (
    <>
      <title>{pageTitle}</title>

      {canonical && <link rel="canonical" href={canonical} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta name="description" content={pageDescription} />

      <meta name="author" content={defaultAuthor} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${pathname}`} />
      <meta property="og:image" content={`${baseUrl}${imageUrl}`} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${baseUrl}${imageUrl}`} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default SeoMeta;

import { useEffect } from "react";

const SITE_URL = "https://www.gcesdip2.com";

type PageMeta = {
  title: string;
  description?: string;
  /** Route path beginning with "/", e.g. "/committee". Used for the canonical URL. */
  path?: string;
};

function upsertMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets the document title, meta description, and canonical link for the current
 * route. This complements the static tags in index.html so each client-rendered
 * route exposes its own metadata to crawlers and browsers. It only updates tags
 * (never removes them), so the static homepage defaults remain a safe fallback.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) upsertMetaByName("description", description);
    if (path) upsertCanonical(`${SITE_URL}${path}`);
  }, [title, description, path]);
}

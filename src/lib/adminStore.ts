import { useCallback, useEffect, useState } from "react";
import { books as seedBooks, type Book } from "@/data/books";
import { articles as seedArticles, type Article } from "@/data/articles";

const BOOKS_KEY = "centory.admin.books.v1";
const ARTICLES_KEY = "centory.admin.articles.v1";

function read<T>(key: string, fallback: T[]): T[] {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage penuh atau tidak tersedia */
  }
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 70) || `draft-${Date.now()}`;
}

export function useAdminList<T extends { slug: string }>(kind: "books" | "articles") {
  const key = kind === "books" ? BOOKS_KEY : ARTICLES_KEY;
  const seed = (kind === "books" ? seedBooks : seedArticles) as unknown as T[];
  const [items, setItems] = useState<T[]>(seed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read<T>(key, seed));
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const persist = useCallback(
    (next: T[]) => {
      setItems(next);
      write(key, next);
    },
    [key],
  );

  const upsert = useCallback(
    (item: T) => {
      persist([item, ...items.filter((i) => i.slug !== item.slug)]);
    },
    [items, persist],
  );

  const remove = useCallback(
    (slug: string) => persist(items.filter((i) => i.slug !== slug)),
    [items, persist],
  );

  const reset = useCallback(() => persist(seed), [persist, seed]);

  return { items, ready, upsert, remove, reset };
}

export type { Book, Article };

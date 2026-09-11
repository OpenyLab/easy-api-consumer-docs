export type NavLink = {
  kind: "link";
  title: string;
  href: string;
  icon?: "book" | "download";
};

export type NavGroup = {
  kind: "group";
  title: string;
  items: NavLink[];
};

export type NavSection = {
  label?: string;
  items: Array<NavLink | NavGroup>;
};

export type TocItem = {
  id: string;
  title: string;
  level?: 2 | 3;
};

export type SearchEntry = {
  title: string;
  href: string;
  section: string;
  keywords: string;
};

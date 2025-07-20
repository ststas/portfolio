import type { SocialLink } from "./types";

export const CONTACTS_TITLE = "Contacts" as const;
export const FOOTER_TITLE = "Stanislav Zaitsev" as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://t.me/stanislavzaytsev",
    icon: "fab fa-telegram",
    label: "Telegram",
  },
  {
    href: "https://www.linkedin.com/in/stanzaitsev/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ststas",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/zaitsev.stan",
    icon: "fab fa-facebook",
    label: "Facebook",
  },
] as const;

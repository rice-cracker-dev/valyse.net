export type NavbarLink = {
  label?: string;
  icon?: string;
  href?: string;
};

export const links: NavbarLink[] = [
  { label: 'Android', icon: 'fa6-brands:android', href: '/download/android' },
  { label: 'Windows', icon: 'fa6-brands:windows', href: '/download/windows' },
  { label: 'Discord', icon: 'fa6-brands:discord', href: 'https://discord.gg/hQQrsW5Xge' },
  { label: 'Socials', icon: 'ph:users', href: '/socials' },
];

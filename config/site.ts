export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lotto",
  description: "ระบบหวยออนไลน์",
  navItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "ตรวจรางวัล",
      href: "/check-reward",
    },
    {
      label: "ซื้อหวย",
      href: "/buy-lotto",
    },
  ],
  navMenuItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "ตรวจรางวัล",
      href: "/check-reward",
    },
    {
      label: "ซื้อหวย",
      href: "/buy-lotto",
    },
    {
      label: "เข้าสู่ระบบ",
      href: "/login",
    },
    {
      label: "สมัครสมาชิก",
      href: "/register",
    },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    docs: "https://heroui.com",
    discord: "https://discord.gg",
    sponsor: "https://patreon.com",
  },
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lotto888",
  description: "ระบบหวยออนไลน์",
  navItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "ผลรางวัล",
      href: "/rewards",
    },
    {
      label: "เติมเงิน",
      href: "/deposit",
    },
    {
      label: "กระเป๋าตัง",
      href: "/wallet",
    },
    {
      label: "ติดต่อเรา",
      href: "/contact",
    },
    {
      label: "ผู้ใช้",
      href: "/profile",
    },
  ],
  navMenuItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "ผลรางวัล",
      href: "/rewards",
    },
    {
      label: "เติมเงิน",
      href: "/deposit",
    },
    {
      label: "กระเป๋าตัง",
      href: "/wallet",
    },
    {
      label: "ติดต่อเรา",
      href: "/contact",
    },
    {
      label: "ผู้ใช้",
      href: "/profile",
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

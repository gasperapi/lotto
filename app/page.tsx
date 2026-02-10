import Link from "next/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import {
  WalletIcon,
  DepositIcon,
  WithdrawIcon,
  TouchIcon,
  CasinoIcon,
  TrophyIcon,
  TargetIcon,
  ListIcon,
  CalculatorIcon,
  UsersIcon,
  MailIcon,
  FileIcon,
  ChartIcon,
} from "@/components/dashboard-icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 w-full max-w-4xl mx-auto px-4">
      {/* Search/Info Bar */}
      <div className="w-full bg-default-100 dark:bg-zinc-800 rounded-lg p-2 mb-4 flex items-center justify-between text-default-500 dark:text-zinc-400 text-sm px-4 overflow-hidden shadow-sm">
        <div className="animate-marquee w-full">
          <span>มีด889 เว็บหวยที่จ่ายดีที่สุด ฝาก-ถอนไว</span>
        </div>
      </div>

      {/* Status Card */}
      <Card className="w-full bg-content1 dark:bg-black border border-default-200 dark:border-green-800 shadow-md">
        <CardBody className="flex flex-col items-center justify-center py-8 relative">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-default-600 dark:text-white text-sm font-medium">
            <WalletIcon size={20} />
            <span>เงินคงเหลือ</span>
          </div>
          <div className="absolute top-4 right-4 bg-default-100 dark:bg-zinc-800 rounded-full px-3 py-1 text-xs text-default-500 dark:text-zinc-300 font-medium">
            สถานะ : ปกติ
          </div>

          <div className="mt-8 text-5xl font-bold text-[#b8860b] dark:text-[#e1b96d] drop-shadow-sm">
            5000.00
          </div>
          <div className="mt-2 text-default-500 dark:text-zinc-400 text-sm font-medium">
            0813333321 (เจลาโต้)
          </div>
        </CardBody>
      </Card>

      {/* Deposit / Withdraw Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <Button as={Link} href="/deposit" className="w-full h-14 text-white bg-gradient-to-r from-green-600 to-green-700 dark:bg-green-700 font-semibold text-lg shadow-md hover:scale-[1.02] transition-transform" radius="sm">
          <DepositIcon size={24} className="mr-2" />
          ฝากเงิน
        </Button>
        <Button as={Link} href="/withdraw" className="w-full h-14 text-white bg-gradient-to-r from-red-800 to-red-900 dark:bg-red-900 font-semibold text-lg shadow-md hover:scale-[1.02] transition-transform" radius="sm">
          <WithdrawIcon size={24} className="mr-2" />
          ถอนเงิน
        </Button>
      </div>

      {/* Large Featured Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Button as={Link} href="/lotto" className="w-full h-24 bg-gradient-to-br from-white to-default-100 dark:from-zinc-800 dark:to-black border border-default-200 dark:border-green-900 text-foreground dark:text-white flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all" radius="sm">
          <TouchIcon size={32} className="text-default-700 dark:text-white" />
          <span className="text-xl font-bold">แทงหวย</span>
        </Button>
        <Button as={Link} href="/casino" className="w-full h-24 bg-gradient-to-br from-white to-default-100 dark:from-zinc-800 dark:to-black border border-default-200 dark:border-green-900 text-foreground dark:text-white flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all" radius="sm">
          <CasinoIcon size={32} className="text-default-700 dark:text-white" />
          <span className="text-xl font-bold">เกมส์ กีฬา คาสิโน</span>
        </Button>
      </div>

      {/* Grid Menu Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {[
          { icon: TouchIcon, label: "แทงหวย", href: "/lotto" },
          { icon: TargetIcon, label: "หวยยี่กี", href: "/lotto/yeekee" },
          { icon: ListIcon, label: "หวยชุด", href: "/lotto/set" },
          { icon: TrophyIcon, label: "ผลรางวัล", href: "/rewards" },
          { icon: FileIcon, label: "โพยหวย", href: "/lotto/poy" },
          { icon: CalculatorIcon, label: "สร้างเลขชุด", href: "/lotto/create-set" },
          { icon: UsersIcon, label: "แนะนำเพื่อน", href: "/affiliate" },
          { icon: MailIcon, label: "ติดต่อแอดมิน", href: "/contact" },
        ].map((item, index) => (
          <Button
            key={index}
            as={Link}
            href={item.href}
            className="w-full h-20 bg-content1 dark:bg-zinc-900 text-foreground dark:text-white font-semibold flex flex-col gap-2 shadow-sm hover:shadow-md hover:bg-content2 transition-all border border-transparent dark:border-opacity-10 dark:border-white"
            radius="sm"
          >
            <item.icon size={24} className="text-default-600 dark:text-white" />
            {item.label}
          </Button>
        ))}
      </div>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Button as={Link} href="/transactions" className="w-full h-12 bg-content1 dark:bg-white text-foreground dark:text-black font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-content2 dark:hover:bg-gray-200 transition-colors border border-default-200 dark:border-transparent" radius="sm">
          <span className="text-lg">↕</span> รายการฝาก - ถอน
        </Button>
        <Button as={Link} href="/financial-report" className="w-full h-12 bg-content1 dark:bg-white text-foreground dark:text-black font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-content2 dark:hover:bg-gray-200 transition-colors border border-default-200 dark:border-transparent" radius="sm">
          <ChartIcon size={20} className="text-foreground dark:text-black" /> รายงานการเงิน
        </Button>
      </div>

    </section>
  );
}

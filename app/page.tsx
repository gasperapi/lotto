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
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 w-full max-w-4xl mx-auto">
      {/* Search/Info Bar */}
      <div className="w-full bg-zinc-800 rounded-lg p-2 mb-4 flex items-center justify-between text-zinc-400 text-sm px-4 overflow-hidden">
        <div className="animate-marquee w-full">
          <span>มีด889 เว็บหวยที่จ่ายดีที่สุด ฝาก-ถอนไว</span>
        </div>
      </div>

      {/* Status Card */}
      <Card className="w-full bg-black border border-green-800">
        <CardBody className="flex flex-col items-center justify-center py-6 relative">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-white text-sm">
            <WalletIcon size={20} />
            <span>เงินคงเหลือ</span>
          </div>
          <div className="absolute top-4 right-4 bg-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300">
            สถานะ : ปกติ
          </div>

          <div className="mt-8 text-5xl font-bold text-[#e1b96d]">
            5000.00
          </div>
          <div className="mt-2 text-zinc-400 text-sm">
            0813333321 (เจลาโต้)
          </div>
        </CardBody>
      </Card>

      {/* Deposit / Withdraw Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <Button className="w-full h-14 text-white bg-green-700 font-semibold text-lg" radius="sm">
          <DepositIcon size={24} className="mr-2" />
          ฝากเงิน
        </Button>
        <Button className="w-full h-14 text-white bg-red-900 font-semibold text-lg" radius="sm">
          <WithdrawIcon size={24} className="mr-2" />
          ถอนเงิน
        </Button>
      </div>

      {/* Large Featured Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Button className="w-full h-24 bg-gradient-to-b from-zinc-800 to-black border border-green-900 text-white flex flex-col items-center justify-center gap-2" radius="sm">
          <TouchIcon size={32} />
          <span className="text-xl font-bold">แทงหวย</span>
        </Button>
        <Button className="w-full h-24 bg-gradient-to-b from-zinc-800 to-black border border-green-900 text-white flex flex-col items-center justify-center gap-2" radius="sm">
          <CasinoIcon size={32} />
          <span className="text-xl font-bold">เกมส์ กีฬา คาสิโน</span>
        </Button>
      </div>

      {/* Grid Menu Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <TouchIcon size={24} className="text-black" />
          แทงหวย
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <div className="relative">
            <TargetIcon size={24} className="text-black" />
          </div>
          หวยยี่กี
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <ListIcon size={24} className="text-black" />
          หวยชุด
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <TrophyIcon size={24} className="text-black" />
          ผลรางวัล
        </Button>

        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <FileIcon size={24} className="text-black" />
          โพยหวย
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <CalculatorIcon size={24} className="text-black" />
          สร้างเลขชุด
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <UsersIcon size={24} className="text-black" />
          แนะนำเพื่อน
        </Button>
        <Button className="w-full h-20 bg-white text-black font-semibold flex flex-col gap-1 shadow-sm hover:bg-gray-100" radius="sm">
          <MailIcon size={24} className="text-black" />
          ติดต่อแอดมิน
        </Button>
      </div>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-black font-semibold">
        <Button className="w-full h-12 bg-white text-black flex items-center justify-center gap-2 shadow-sm hover:bg-gray-100" radius="sm">
          <span className="text-lg">↕</span> รายการฝาก - ถอน
        </Button>
        <Button className="w-full h-12 bg-white text-black flex items-center justify-center gap-2 shadow-sm hover:bg-gray-100" radius="sm">
          <ChartIcon size={20} className="text-black" /> รายงานการเงิน
        </Button>
      </div>

    </section>
  );
}

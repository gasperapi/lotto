import {
    TouchIcon,
    TargetIcon,
    ListIcon,
    WalletIcon,
    CasinoIcon,
} from "@/components/dashboard-icons";
import LottoCard from "@/components/lotto-card";
import { Button } from "@heroui/button";
import Link from "next/link";

// Helper to get a future date for demo purposes
const getFutureDate = (days: number, hours: number, minutes: number, seconds: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
    date.setSeconds(date.getSeconds() + seconds);
    return date.toISOString();
};

export default function LottoPage() {
    return (
        <section className="flex flex-col items-center gap-6 py-8 w-full max-w-6xl mx-auto px-4">

            {/* Page Header */}
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-bold text-default-900 dark:text-white">แทงหวยออนไลน์</h1>
                <Button as={Link} href="/" variant="light" className="text-default-500">
                    ย้อนกลับ
                </Button>
            </div>

            {/* Main Lotteries (Government & Yi Ki) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <LottoCard
                    title="หวยรัฐบาล"
                    icon={<TouchIcon size={24} />}
                    colorTheme="green"
                    targetDate={getFutureDate(5, 14, 15, 51)}
                    timeLeft="5 วัน 14:15:51"
                    closeDate="ปิดรับ 16-ก.พ.-2026 15:30"
                    status="เปิดรับแทง"
                />
                <LottoCard
                    title="จับยี่กี"
                    icon={<TargetIcon size={24} />}
                    colorTheme="purple"
                    targetDate={getFutureDate(0, 23, 59, 59)}
                    timeLeft="23:59:59"
                    closeDate="ปิดรับ 16-ก.พ.-2026 15:30"
                    round="เปิดแทง 144 รอบ"
                    status="กำลังเดิน"
                />
            </div>

            {/* Secondary Lotteries (BAAC, GSB) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <LottoCard
                    title="หวยธกส."
                    icon={<ListIcon size={24} />}
                    colorTheme="blue"
                    targetDate={getFutureDate(0, 3, 15, 20)}
                    timeLeft="03:15:20"
                    closeDate="ปิดรับ 16-ก.พ. 09:00"
                    status="เปิดรับแทง"
                />
                <LottoCard
                    title="หวยออมสิน"
                    icon={<WalletIcon size={24} />}
                    colorTheme="pink"
                    targetDate={getFutureDate(0, 4, 20, 10)}
                    timeLeft="04:20:10"
                    closeDate="ปิดรับ 16-ก.พ. 12:30"
                    status="เปิดรับแทง"
                />
            </div>

            {/* Foreign / Stocks Section */}
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-2 px-1 border-b border-default-200 dark:border-white/10 pb-2">
                    <CasinoIcon size={28} className="text-default-700 dark:text-yellow-500" />
                    <h3 className="text-2xl font-bold text-default-700 dark:text-white">หวยต่างประเทศ / หุ้น</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    <LottoCard title="หุ้นดาวโจนส์" colorTheme="green" targetDate={getFutureDate(0, 0, 15, 51)} timeLeft="00:15:51" closeDate="01:30" status="เปิด" />
                    <LottoCard title="ลาวประตูชัย" colorTheme="green" targetDate={getFutureDate(0, 4, 25, 51)} timeLeft="04:25:51" closeDate="05:40" status="เปิด" />
                    <LottoCard title="ลาวสันติภาพ" colorTheme="green" targetDate={getFutureDate(0, 5, 25, 51)} timeLeft="05:25:51" closeDate="06:40" status="เปิด" />
                    <LottoCard title="ประชาชนลาว" colorTheme="green" targetDate={getFutureDate(0, 6, 25, 51)} timeLeft="06:25:51" closeDate="07:40" status="เปิด" />

                    <LottoCard title="ฮานอย" colorTheme="red" targetDate={getFutureDate(0, 2, 10, 0)} timeLeft="02:10:00" closeDate="18:00" status="เปิด" />
                    <LottoCard title="ฮานอย VIP" colorTheme="red" targetDate={getFutureDate(0, 3, 10, 0)} timeLeft="03:10:00" closeDate="19:00" status="เปิด" />
                    <LottoCard title="ลาวสตาร์" colorTheme="green" targetDate={getFutureDate(0, 1, 45, 20)} timeLeft="01:45:20" closeDate="15:30" status="เปิด" />
                    <LottoCard title="นิเคอิเช้า" colorTheme="blue" targetDate={getFutureDate(0, 8, 0, 0)} timeLeft="08:00:00" closeDate="09:20" status="ปิด" />
                </div>
            </div>

        </section>
    );
}

"use client";

import { Card, CardBody } from "@heroui/card";
import { IconSvgProps } from "@/types";
import { cn } from "@heroui/theme";
import { motion } from "framer-motion";

export type ColorTheme = "green" | "purple" | "blue" | "pink" | "red" | "yellow";

export interface LottoCardProps {
    title: string;
    icon?: React.ReactNode;
    iconUrl?: string; // Optional image icon (like flag)
    colorTheme?: ColorTheme;
    timeLeft?: string; // Static fallback
    targetDate?: Date | string; // Target date for countdown
    closeDate: string;
    status?: string; // e.g. "เปิดรับ", "ปิดรับ"
    round?: string; // e.g. "เปิดแทง 144 รอบ"
}

const themeStyles: Record<ColorTheme, {
    cardBorder: string;
    headerBg: string;
    headerText: string;
    bodyGradient: string;
    footerBg: string;
    footerText: string;
    glow: string;
    bodyText?: string;
}> = {
    green: {
        cardBorder: "border-green-500/30",
        headerBg: "bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-900/20",
        headerText: "text-green-800 dark:text-green-200",
        bodyGradient: "from-green-600 to-green-700",
        footerBg: "bg-green-700",
        footerText: "text-white",
        glow: "hover:shadow-green-500/20",
    },
    purple: {
        cardBorder: "border-purple-500/30",
        headerBg: "bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-900/20",
        headerText: "text-purple-800 dark:text-purple-200",
        bodyGradient: "from-purple-600 to-purple-700",
        footerBg: "bg-purple-700",
        footerText: "text-white",
        glow: "hover:shadow-purple-500/20",
    },
    blue: {
        cardBorder: "border-blue-500/30",
        headerBg: "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/20",
        headerText: "text-blue-800 dark:text-blue-200",
        bodyGradient: "from-blue-600 to-blue-700",
        footerBg: "bg-blue-700",
        footerText: "text-white",
        glow: "hover:shadow-blue-500/20",
    },
    pink: {
        cardBorder: "border-pink-500/30",
        headerBg: "bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-900/20",
        headerText: "text-pink-800 dark:text-pink-200",
        bodyGradient: "from-pink-500 to-pink-600",
        footerBg: "bg-pink-600",
        footerText: "text-white",
        glow: "hover:shadow-pink-500/20",
    },
    red: {
        cardBorder: "border-red-500/30",
        headerBg: "bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-900/20",
        headerText: "text-red-800 dark:text-red-200",
        bodyGradient: "from-red-600 to-red-700",
        footerBg: "bg-red-700",
        footerText: "text-white",
        glow: "hover:shadow-red-500/20",
    },
    yellow: {
        cardBorder: "border-yellow-500/30",
        headerBg: "bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/40 dark:to-yellow-900/20",
        headerText: "text-yellow-800 dark:text-yellow-200",
        bodyGradient: "from-yellow-500 to-yellow-600",
        footerBg: "bg-yellow-600",
        footerText: "text-black/80",
        glow: "hover:shadow-yellow-500/20",
        bodyText: "text-black/90"
    }
};

import { useEffect, useState } from "react";

export default function LottoCard({
    title,
    icon,
    iconUrl,
    colorTheme = "green",
    timeLeft = "-", // Static fallback
    targetDate,
    closeDate,
    status,
    round,
}: LottoCardProps) {
    // Safe fallback if theme is missing for some reason
    const theme = themeStyles[colorTheme] || themeStyles.green;
    const [displayTime, setDisplayTime] = useState(timeLeft);

    useEffect(() => {
        if (!targetDate) return;

        const calculateTimeLeft = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            if (difference < 0) {
                return "ปิดรับแทง";
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Format: "5 วัน 14:15:51" or "14:15:51" if 0 days
            const hh = String(hours).padStart(2, '0');
            const mm = String(minutes).padStart(2, '0');
            const ss = String(seconds).padStart(2, '0');

            if (days > 0) {
                return `${days} วัน ${hh}:${mm}:${ss}`;
            }
            return `${hh}:${mm}:${ss}`;
        };

        // Initial calculation
        setDisplayTime(calculateTimeLeft());

        const timer = setInterval(() => {
            setDisplayTime(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full relative group cursor-pointer"
        >
            <Card
                className={cn(
                    "w-full border shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden",
                    theme.cardBorder,
                    theme.glow
                )}
                radius="lg"
            >
                {/* Header */}
                <div className={cn("px-4 py-3 flex items-center justify-between", theme.headerBg)}>
                    <div className="flex items-center gap-3">
                        {iconUrl ? (
                            <div className="relative">
                                <img src={iconUrl} alt="icon" className="w-6 h-6 object-contain rounded-full shadow-sm bg-white p-0.5" />
                            </div>
                        ) : icon ? (
                            <div className={cn("p-1.5 rounded-full bg-white/20 shadow-inner", theme.headerText)}>
                                {icon}
                            </div>
                        ) : null}
                        <span className={cn("font-bold text-sm tracking-wide", theme.headerText)}>{title}</span>
                    </div>
                    {round && (
                        <div className={cn("text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 border border-white/10", theme.headerText)}>
                            {round}
                        </div>
                    )}
                </div>

                {/* Body (Countdown) */}
                <CardBody
                    className={cn(
                        "flex flex-col items-center justify-center py-6 relative overflow-hidden bg-gradient-to-br",
                        theme.bodyGradient,
                        theme.bodyText || "text-white"
                    )}
                >
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10 blur-xl" />

                    <div className="text-4xl font-mono font-bold tracking-tight z-10 drop-shadow-md tabular-nums">
                        {displayTime}
                    </div>
                    {/* Secondary status or title repetition */}
                    <div className="mt-1 text-sm font-medium opacity-90 z-10">
                        {title}
                    </div>
                </CardBody>

                {/* Footer */}
                <div className={cn("px-4 py-2 flex items-center justify-between text-xs font-medium", theme.footerBg, theme.footerText)}>
                    <div className="flex flex-col">
                        <span className="opacity-80">ปิดรับ</span>
                        <span className="font-semibold">{closeDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/20 backdrop-blur-sm">
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", status === "ปิดรับ" ? "bg-red-500" : "bg-green-400")} />
                        <span>{status || "กำลังเปิดรับ"}</span>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

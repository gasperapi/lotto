"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import NextLink from "next/link";

export default function LoginPage() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [phone, setPhone] = React.useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="flex flex-col items-center gap-2 mb-4">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>

            <Card className="w-full max-w-lg p-4">
                <CardHeader className="flex flex-col gap-1 items-center justify-center pb-4">
                    <h1 className="text-xl font-bold">เข้าสู่ระบบ</h1>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        isRequired
                        color="success"
                        inputMode="numeric"
                        label="เบอร์โทรศัพท์"
                        maxLength={10}
                        placeholder="เบอร์โทรศัพท์"
                        type="text"
                        value={phone}
                        variant="bordered"
                        onValueChange={(value) => {
                            if (/^\d*$/.test(value)) {
                                setPhone(value);
                            }
                        }}
                    />
                    <Input
                        isRequired
                        color="success"
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        label="รหัสผ่าน"
                        placeholder="รหัสผ่าน"
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                    />
                    <div className="flex justify-end">
                        <a href="#" className="text-xs text-default-500 hover:text-success">ลืมรหัสผ่าน ?</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button color="success" className="w-full font-semibold text-white" size="lg">
                            เข้าสู่ระบบ
                        </Button>
                        <NextLink href="/register">
                            <Button variant="bordered" color="success" className="w-full font-semibold" size="lg">
                                สมัครสมาชิก
                            </Button>
                        </NextLink>
                    </div>
                </CardBody>
            </Card>

            <div className="flex flex-col gap-2 w-full max-w-sm">
                {/* Placeholder for other buttons if needed */}
            </div>
        </div>
    );
}

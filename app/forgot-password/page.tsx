"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { InputOtp } from "@heroui/input-otp";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";

export default function ForgotPasswordPage() {
    const [step, setStep] = React.useState(0);
    const [phone, setPhone] = React.useState("");
    const [captcha, setCaptcha] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);

    const [timeLeft, setTimeLeft] = React.useState(30);
    const [canResend, setCanResend] = React.useState(false);
    const [resendCount, setResendCount] = React.useState(0);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (step === 1 && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setCanResend(true);
        }
        return () => clearInterval(timer);
    }, [step, timeLeft]);

    const handleResendOtp = () => {
        if (resendCount < 3) {
            setResendCount((prev) => prev + 1);
            setTimeLeft(30);
            setCanResend(false);
            // Logic to resend OTP would go here
        }
    };

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

            <div className="flex gap-4 mb-2 w-full max-w-lg">
                <Button
                    as={NextLink}
                    href="/login"
                    className="flex-1 font-semibold text-white bg-success-600 hover:bg-success-700"
                    size="lg"
                    radius="sm"
                >
                    เข้าสู่ระบบ
                </Button>
                <Button
                    as={NextLink}
                    href="/register"
                    className="flex-1 font-semibold text-white bg-success-600 hover:bg-success-700"
                    size="lg"
                    radius="sm"
                >
                    สมัครสมาชิก
                </Button>
            </div>

            <Card className="w-full max-w-lg p-4 bg-content1">
                <CardHeader className="flex flex-col gap-1 items-center justify-center pb-4">
                    <h1 className="text-xl font-bold">ตั้งรหัสผ่านใหม่</h1>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    {step === 0 ? (
                        <>
                            <Input
                                isRequired
                                color="success"
                                label="เบอร์โทรศัพท์"
                                placeholder="เบอร์โทรศัพท์"
                                type="text"
                                inputMode="numeric"
                                maxLength={10}
                                variant="bordered"
                                value={phone}
                                onValueChange={(value) => {
                                    if (/^\d*$/.test(value)) {
                                        setPhone(value);
                                    }
                                }}
                            />

                            <div className="space-y-2">
                                <label className="text-sm text-default-500">รหัสความปลอดภัย</label>
                                <div className="bg-default-100 p-2 rounded-lg flex items-center justify-center border-2 border-dashed border-default-300">
                                    <span className="text-3xl font-mono font-bold tracking-widest text-default-700 line-through decoration-wavy decoration-default-400">
                                        358375
                                    </span>
                                </div>
                                <Input
                                    isRequired
                                    color="success"
                                    label="กรอกตัวเลขด้านบน"
                                    placeholder="กรอกตัวเลขด้านบน"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={6}
                                    variant="bordered"
                                    value={captcha}
                                    onValueChange={(value) => {
                                        if (/^\d*$/.test(value)) setCaptcha(value);
                                    }}
                                />
                            </div>

                            <Button
                                className="w-full font-semibold text-white mt-2"
                                size="lg"
                                radius="sm"
                                color="success"
                                isDisabled={phone.length === 0 || captcha.length === 0}
                                onPress={() => {
                                    setStep(1);
                                    setTimeLeft(30);
                                    setCanResend(false);
                                    setResendCount(0);
                                }}
                            >
                                ถัดไป
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center gap-2 w-full">
                                <InputOtp length={4} value={otp} onValueChange={setOtp} />
                                <div className="text-small text-default-500">
                                    OTP value: <span className="text-md font-medium">{otp}</span>
                                </div>
                                {resendCount > 0 && (
                                    <div className="text-small text-danger font-medium">
                                        ขอรหัสผ่านไปแล้ว {resendCount}/3
                                    </div>
                                )}
                                <Button
                                    isDisabled={!canResend || resendCount >= 3}
                                    variant="light"
                                    size="sm"
                                    className="text-default-500"
                                    onPress={handleResendOtp}
                                >
                                    {canResend ? "ไม่ได้รับรหัส OTP" : `ขอรหัสใหม่ otp (${timeLeft})`}
                                </Button>
                            </div>

                            <Input
                                isRequired
                                color="success"
                                label="รหัสผ่านใหม่"
                                placeholder="รหัสผ่านใหม่"
                                variant="bordered"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {isPasswordVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isPasswordVisible ? "text" : "password"}
                                value={password}
                                onValueChange={setPassword}
                            />

                            <Input
                                isRequired
                                color="success"
                                label="ยืนยันรหัสผ่าน"
                                placeholder="ยืนยันรหัสผ่าน"
                                variant="bordered"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {isConfirmPasswordVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                value={confirmPassword}
                                onValueChange={setConfirmPassword}
                            />

                            <Button
                                className="w-full font-semibold text-white mt-2"
                                size="lg"
                                radius="sm"
                                color="success"
                                isDisabled={otp.length !== 4 || password.length === 0 || confirmPassword.length === 0 || password !== confirmPassword}
                            >
                                ยืนยัน
                            </Button>

                            <Button
                                className="w-full font-semibold text-default-500"
                                size="lg"
                                radius="sm"
                                variant="light"
                                onPress={() => setStep(0)}
                            >
                                ย้อนกลับ
                            </Button>
                        </>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

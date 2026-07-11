"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";

const securityCode = "636655";

function PasswordToggleIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {visible ? (
        <>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      ) : (
        <>
          <path d="m3 3 18 18" />
          <path d="M10.6 6.2A10.6 10.6 0 0 1 12 6c6.5 0 10 6 10 6a18.5 18.5 0 0 1-3.1 3.8" />
          <path d="M6.2 6.2A18.6 18.6 0 0 0 2 12s3.5 6 10 6c1 0 2-.2 2.8-.5" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      )}
    </svg>
  );
}

export default function ForgotPasswordPage() {
  const [step, setStep] = React.useState<"verify" | "reset">("verify");
  const [phone, setPhone] = React.useState("");
  const [captcha, setCaptcha] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);

  const canContinue = phone.length === 10 && captcha === securityCode;
  const canReset = otp.length === 4 && password.length > 0 && password === confirmPassword;

  const numericInput = (setter: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) setter(value);
  };

  return (
    <main className="fixed inset-0 z-40 min-h-screen overflow-y-auto bg-[#292929] px-5 py-12 text-white sm:px-8 sm:py-16">
      <div className="mx-auto flex w-full max-w-[425px] flex-col items-center">
        <NextLink
          href="/"
          aria-label="กลับสู่หน้าหลัก"
          className="mb-12 block transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4b9b32] focus-visible:ring-offset-4 focus-visible:ring-offset-[#292929] sm:mb-14"
        >
          <Image
            src="/logo.png"
            alt="LOTTO888"
            width={132}
            height={132}
            priority
            className="h-[132px] w-[132px] object-contain drop-shadow-[0_5px_8px_rgba(0,0,0,0.35)]"
          />
        </NextLink>

        <nav className="mb-4 grid w-full grid-cols-2 gap-6" aria-label="บัญชีผู้ใช้">
          <NextLink
            href="/login"
            className="rounded-lg bg-[#315b2a] px-4 py-3 text-center text-base font-medium text-white shadow-md shadow-black/25 transition-colors hover:bg-[#3a6b31]"
          >
            เข้าสู่ระบบ
          </NextLink>
          <NextLink
            href="/register"
            className="rounded-lg bg-[#315b2a] px-4 py-3 text-center text-base font-medium text-white shadow-md shadow-black/25 transition-colors hover:bg-[#3a6b31]"
          >
            สมัครสมาชิก
          </NextLink>
        </nav>

        <section className="w-full rounded-2xl bg-[#303030] p-4 shadow-[0_8px_18px_rgba(0,0,0,0.14)] sm:p-5">
          {step === "verify" ? (
            <form
              className="flex flex-col gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                if (canContinue) setStep("reset");
              }}
            >
              <h1 className="mb-2 text-center text-lg font-medium text-white">ตั้งรหัสผ่านใหม่</h1>
              <label className="flex flex-col gap-1 text-base font-medium text-[#f3f3f3]">
                เบอร์โทรศัพท์
                <input
                  required
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="เบอร์โทรศัพท์"
                  type="text"
                  value={phone}
                  onChange={numericInput(setPhone)}
                  className="h-14 w-full rounded bg-white px-4 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                />
              </label>

              <div className="flex flex-col gap-1 pt-1">
                <span className="text-base font-medium text-[#f3f3f3]">รหัสความปลอดภัย</span>
                <div
                  aria-label="รหัสความปลอดภัย 636655"
                  className="relative flex h-14 items-center justify-center overflow-hidden rounded bg-white font-mono text-[28px] font-bold tracking-[0.18em] text-zinc-700"
                >
                  <span className="relative z-10 -skew-x-6">{securityCode}</span>
                  <span className="absolute h-px w-40 rotate-6 bg-zinc-700/70" />
                  <span className="absolute h-px w-40 -rotate-6 bg-zinc-700/60" />
                </div>
                <input
                  required
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="กรอกตัวเลขด้านบน"
                  type="text"
                  value={captcha}
                  onChange={numericInput(setCaptcha)}
                  className="h-14 w-full rounded bg-white px-4 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                />
              </div>

              <button
                type="submit"
                disabled={!canContinue}
                className="mt-1 h-12 w-full rounded bg-[#348424] text-base font-medium text-white shadow-md shadow-black/30 transition-colors enabled:hover:bg-[#3f972c] disabled:cursor-not-allowed disabled:bg-[#555555] disabled:text-zinc-400"
              >
                ถัดไป
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
              <h1 className="mb-1 text-center text-lg font-medium text-white">ยืนยันรหัสผ่านใหม่</h1>
              <label className="flex flex-col gap-1 text-base font-medium text-[#f3f3f3]">
                รหัส OTP
                <input
                  required
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="กรอกรหัส OTP 4 หลัก"
                  type="text"
                  value={otp}
                  onChange={numericInput(setOtp)}
                  className="h-14 w-full rounded bg-white px-4 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                />
              </label>

              <label className="flex flex-col gap-1 text-base font-medium text-[#f3f3f3]">
                รหัสผ่านใหม่
                <span className="relative">
                  <input
                    required
                    placeholder="รหัสผ่านใหม่"
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-14 w-full rounded bg-white px-4 pr-14 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                  />
                  <button
                    type="button"
                    aria-label={isPasswordVisible ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                    aria-pressed={isPasswordVisible}
                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-zinc-500 hover:text-zinc-800 focus:outline-none focus-visible:text-[#348424]"
                  >
                    <PasswordToggleIcon visible={isPasswordVisible} />
                  </button>
                </span>
              </label>

              <label className="flex flex-col gap-1 text-base font-medium text-[#f3f3f3]">
                ยืนยันรหัสผ่านใหม่
                <span className="relative">
                  <input
                    required
                    placeholder="ยืนยันรหัสผ่านใหม่"
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="h-14 w-full rounded bg-white px-4 pr-14 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                  />
                  <button
                    type="button"
                    aria-label={isConfirmPasswordVisible ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                    aria-pressed={isConfirmPasswordVisible}
                    onClick={() => setIsConfirmPasswordVisible((visible) => !visible)}
                    className="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-zinc-500 hover:text-zinc-800 focus:outline-none focus-visible:text-[#348424]"
                  >
                    <PasswordToggleIcon visible={isConfirmPasswordVisible} />
                  </button>
                </span>
              </label>

              <button
                type="submit"
                disabled={!canReset}
                className="mt-1 h-12 w-full rounded bg-[#348424] text-base font-medium text-white shadow-md shadow-black/30 transition-colors enabled:hover:bg-[#3f972c] disabled:cursor-not-allowed disabled:bg-[#555555] disabled:text-zinc-400"
              >
                ยืนยัน
              </button>
              <button
                type="button"
                onClick={() => setStep("verify")}
                className="h-10 text-sm text-white underline underline-offset-2 hover:text-[#8bd373]"
              >
                ย้อนกลับ
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

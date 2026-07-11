"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [phone, setPhone] = React.useState("");

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
            className="rounded-lg bg-[#348424] px-4 py-3 text-center text-base font-medium text-white shadow-md shadow-black/25 transition-colors hover:bg-[#3f972c]"
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
          <form className="flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
            <label className="flex flex-col gap-1.5 text-base font-medium text-[#f3f3f3]">
              ยูสเซอร์ผู้ใช้
              <input
                required
                inputMode="numeric"
                maxLength={10}
                placeholder="ยูสเซอร์ผู้ใช้"
                type="text"
                value={phone}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^\d*$/.test(value)) setPhone(value);
                }}
                className="h-14 w-full rounded bg-white px-4 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-base font-medium text-[#f3f3f3]">
              รหัสผ่าน
              <span className="relative">
                <input
                  required
                  placeholder="รหัสผ่าน"
                  type={isVisible ? "text" : "password"}
                  className="h-14 w-full rounded bg-white px-4 pr-14 text-center text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#4b9b32]"
                />
                <button
                  type="button"
                  aria-label={isVisible ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                  aria-pressed={isVisible}
                  onClick={() => setIsVisible((visible) => !visible)}
                  className="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-zinc-500 transition-colors hover:text-zinc-800 focus:outline-none focus-visible:text-[#348424]"
                >
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {isVisible ? (
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
                </button>
              </span>
            </label>

            <NextLink
              href="/forgot-password"
              className="ml-auto w-fit text-sm text-white underline underline-offset-2 transition-colors hover:text-[#8bd373]"
            >
              ลืมรหัสผ่าน ?
            </NextLink>

            <button
              type="submit"
              className="mt-1 h-12 w-full rounded bg-[#348424] text-base font-medium text-white shadow-md shadow-black/30 transition-colors hover:bg-[#3f972c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8bd373] focus-visible:ring-offset-2 focus-visible:ring-offset-[#303030]"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center  bg-transparent p-4">
            <Card className="w-full max-w-md p-4 text-center">
                <CardBody className="gap-4 flex flex-col items-center">
                    <div className="relative w-32 h-32">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-default-900">404</h1>
                    <p className="text-default-500 text-lg">
                        ขออภัย ไม่พบหน้าที่คุณต้องการ
                    </p>
                    <div className="w-full pt-2">
                        <Link href="/" passHref>
                            <Button color="success" className="w-full font-semibold text-white" size="lg">
                                กลับสู่หน้าหลัก
                            </Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

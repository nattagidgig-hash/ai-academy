import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 text-center">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-6xl font-bold text-gradient-accent font-number mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold mb-4">ไม่พบหน้าที่คุณค้นหา</h1>
        <p className="text-text-secondary mb-8">
          หน้าที่คุณกำลังมองหาอาจถูกย้ายหรือไม่มีอยู่
        </p>
        <Link href="/">
          <Button variant="primary">กลับหน้าหลัก</Button>
        </Link>
      </div>
    </section>
  );
}

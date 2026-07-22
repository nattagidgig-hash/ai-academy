import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Wrench, TrendingUp, Award } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI ACADEMY — แบรนด์ AI ระดับพรีเมียมที่พัฒนาคนและองค์กร จากการใช้เครื่องมือ ไปสู่การคิดและทำงานด้วย AI อย่างเป็นระบบ",
};

const essences = [
  {
    icon: Lightbulb,
    title: "คิดเป็น",
    desc: "เข้าใจปัญหา วิเคราะห์บริบท และออกแบบวิธีใช้ AI ให้เหมาะสม",
  },
  {
    icon: Wrench,
    title: "ทำเป็น",
    desc: "ใช้เครื่องมือจริง สร้างงานจริง และประยุกต์ใช้กับงานแต่ละประเภท",
  },
  {
    icon: TrendingUp,
    title: "เติบโตเป็นระบบ",
    desc: "เปลี่ยนจากการใช้ AI เป็นครั้งๆ ไปสู่ระบบงานที่ยั่งยืน",
  },
];

const standards = [
  "Apple Product Launch — ความแม่นยำของอัตลักษณ์ภาพ",
  "Stripe — ความชัดเจนของระบบและเอกสาร",
  "Linear — คุณภาพของ UI/UX และ Product Design",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="ABOUT"
            title="AI ACADEMY — AI Capability Builder"
            accentWord="AI Capability Builder"
          />
          <div className="mt-12 space-y-8 text-lg text-text-secondary leading-relaxed">
            <p>
              เราเชื่อว่า AI ที่ทรงพลังที่สุด ไม่ได้เริ่มจากเครื่องมือที่ดีที่สุด
              แต่เริ่มจากคนที่คิดเป็น
            </p>
            <p>
              เราไม่ได้สอนให้คนพึ่งพา AI แต่สอนให้คนใช้ AI เพื่อขยายศักยภาพของตนเอง
            </p>
            <p>
              เราไม่ได้สร้างเพียง Prompt แต่สร้างกระบวนการคิด ระบบงาน และความสามารถใหม่
            </p>
            <p>
              เพราะอนาคตไม่ได้เป็นของคนที่ใช้ AI มากที่สุด
              <br />
              แต่เป็นของคนที่รู้ว่า ควรใช้ AI ที่ไหน อย่างไร และเพื่อผลลัพธ์อะไร
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="แก่นของเรา"
            title="คิดเป็น ทำเป็น เติบโตเป็นระบบ"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {essences.map((essence) => {
              const Icon = essence.icon;
              return (
                <GlassCard key={essence.title} className="p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-accent">
                    {essence.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {essence.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="มาตรฐานงาน"
            title="คุณภาพที่เทียบเท่าระดับโลก"
            subtitle="เราอ้างอิงมาตรฐานงานจากแบรนด์ระดับโลกในการออกแบบทุกชิ้น"
          />
          <div className="mt-12 space-y-4">
            {standards.map((s) => (
              <GlassCard key={s} className="p-5 flex items-start gap-4">
                <Award size={20} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">{s}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="พร้อมเริ่มต้นกับ AI ACADEMY?"
            subtitle="ไม่ว่าคุณจะเป็นบุคคล ธุรกิจ หรือองค์กร เรามีเส้นทางการพัฒนาที่ใช่สำหรับคุณ"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/academy">
              <Button variant="primary">เริ่มเรียนรู้</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">ปรึกษาโปรเจกต์</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, FileText, Palette, ArrowRight, Check } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "เว็บไซต์ที่ไม่ได้มีไว้แค่สวย แต่ช่วยสร้างลูกค้า — Website Intelligence, AI Content System, AI Creative Studio",
};

const services = [
  {
    icon: Monitor,
    title: "Website Intelligence",
    tagline: "เว็บไซต์ที่สร้างลูกค้า ไม่ใช่แค่สวย",
    desc: "ออกแบบและพัฒนาเว็บไซต์จากเป้าหมายธุรกิจ เน้น Conversion, SEO และประสบการณ์ผู้ใช้ระดับพรีเมียม",
    features: [
      "ออกแบบจากเป้าหมายธุรกิจ",
      "เชื่อม Content, Lead และ Customer Journey",
      "วางโครงสร้างข้อมูลรองรับ AI",
      "รองรับสมาชิกและระบบคอร์ส",
    ],
    href: "/services/website",
  },
  {
    icon: FileText,
    title: "AI Content System",
    tagline: "หนึ่งแหล่งข้อมูล ต่อยอดเป็นคอนเทนต์ทั้งระบบ",
    desc: "ระบบผลิตคอนเทนต์ที่เปลี่ยนข้อมูลต้นทางชุดเดียว ให้กลายเป็นเนื้อหาสำหรับทุกช่องทาง",
    features: [
      "One Source, Multiple Outputs",
      "ลดเวลาผลิตคอนเทนต์",
      "รักษาความสม่ำเสมอของแบรนด์",
      "เชื่อมหลายช่องทางอัตโนมัติ",
    ],
    href: "/services/content-system",
  },
  {
    icon: Palette,
    title: "AI Creative Studio",
    tagline: "งานออกแบบ AI ที่มี Art Direction",
    desc: "บริการสร้างงานออกแบบและสื่อการตลาดด้วย AI ผสาน Art Direction และมาตรฐานระดับพรีเมียม",
    features: [
      "มี CI และ Art Direction ชัดเจน",
      "ไม่สร้างภาพ AI แบบทั่วไป",
      "สื่อสารจุดขายได้ตรงกลุ่มเป้าหมาย",
      "รองรับหลายขนาดและช่องทาง",
    ],
    href: "/services/creative-studio",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="BUILD"
            title="เว็บไซต์ที่ไม่ได้มีไว้แค่สวย แต่ช่วยสร้างลูกค้า"
            subtitle="ตั้งแต่กลยุทธ์ การออกแบบ ไปจนถึงระบบหลังบ้านที่ขับเคลื่อนด้วย AI"
            accentWord="สร้างลูกค้า"
          />
        </div>
      </section>

      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <section
            key={service.title}
            className={`py-24 ${i % 2 === 1 ? "bg-bg-deep" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant="secondary">
                      ดูรายละเอียด
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-cyber/5 ring-1 ring-border-glow flex items-center justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Icon size={64} className="text-accent/30" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="พร้อมเริ่มต้นโปรเจกต์ของคุณ?"
            subtitle="นัดคุยฟรี 30 นาที เพื่อวิเคราะห์ความต้องการและให้คำแนะนำเบื้องต้น"
          />
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                นัดคุยฟรี 30 นาที
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

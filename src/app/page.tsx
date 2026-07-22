"use client";

import Link from "next/link";
import {
  User,
  Store,
  Building2,
  Brain,
  Command,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const paths = [
  {
    icon: User,
    title: "สำหรับคนทำงาน",
    desc: "ทำงานเร็วขึ้น คิดเป็นระบบ สร้างผลลัพธ์ได้จริง",
    href: "/academy",
    label: "ดูเส้นทาง",
  },
  {
    icon: Store,
    title: "สำหรับธุรกิจ",
    desc: "เว็บไซต์ Content System ระบบขายที่ขับเคลื่อนด้วย AI",
    href: "/services",
    label: "ดูเส้นทาง",
  },
  {
    icon: Building2,
    title: "สำหรับองค์กร",
    desc: "ยกระดับทีม สร้าง AI Organization เปลี่ยนผ่านองค์กร",
    href: "/transform",
    label: "ดูเส้นทาง",
  },
];

const pillars = [
  {
    num: "01",
    icon: Brain,
    title: "THINK",
    desc: "พัฒนาความคิดและการสั่งงาน AI",
  },
  {
    num: "02",
    icon: Command,
    title: "BUILD",
    desc: "สร้างสินทรัพย์และระบบดิจิทัล",
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "LEARN",
    desc: "พัฒนาทักษะผ่านการเรียนรู้",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "TRANSFORM",
    desc: "เปลี่ยนองค์กรและกระบวนการทำงาน",
  },
];

const flagship = [
  {
    title: "AI Prompt Thinking",
    tag: "คอร์สเรือธง",
    desc: "คิดเป็น สั่ง AI เป็น ใช้ได้ทุกสายงาน — ตั้งแต่พื้นฐานจนถึงการออกแบบระบบ Prompt",
    href: "/academy/courses/ai-prompt-thinking",
  },
  {
    title: "Website Intelligence",
    tag: "บริการ",
    desc: "เว็บไซต์ที่ไม่ได้มีไว้แค่สวย แต่ช่วยสร้างลูกค้าและขับเคลื่อนธุรกิจ",
    href: "/services/website",
  },
  {
    title: "AI Content System",
    tag: "บริการ",
    desc: "One Source, Multiple Outputs — ระบบผลิตคอนเทนต์จากแหล่งข้อมูลเดียว",
    href: "/services/content-system",
  },
];

const results = [
  { number: "3x", label: "สร้างคอนเทนต์เร็วขึ้น" },
  { number: "-60%", label: "งานซ้ำซ้อนลดลง" },
  { number: "500+", label: "ผู้เรียน" },
  { number: "50+", label: "องค์กรที่ไว้วางใจ" },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-dvh flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-accent">
                AI BUSINESS ECOSYSTEM
              </p>
              <h1 className="text-[2.5rem] sm:text-[4.5rem] font-bold leading-[1.1]">
                <span className="block">คิดเป็น</span>
                <span className="block text-gradient-accent text-[1.1em]">
                  สั่ง AI เป็น
                </span>
                <span className="block">ใช้ได้ทุกสายงาน</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg">
                ระบบพัฒนาความคิด ทักษะ และกระบวนการทำงานด้วย AI ตั้งแต่บุคคลถึงองค์กร
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("path-selection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  เริ่มเส้นทางของคุณ
                </Button>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    ปรึกษาโปรเจกต์
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-cyan-cyber/5 ring-1 ring-border-glow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
                    <Brain
                      size={120}
                      className="absolute inset-0 m-auto text-accent/60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Path Selection */}
      <section id="path-selection" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="คุณคือใคร"
            title="คุณอยากพัฒนาอะไร"
            subtitle="เลือกเส้นทางที่ใช่สำหรับคุณ"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <GlassCard key={path.title} className="p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {path.desc}
                  </p>
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-glow transition-colors group"
                  >
                    {path.label}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: 4 Pillars */}
      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="4 เสาหลัก"
            title="จากความคิด สู่ระบบที่วัดผลได้"
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <GlassCard key={pillar.num} className="p-8 flex gap-6 items-start">
                  <span className="text-3xl font-bold text-accent/30 font-number">
                    {pillar.num}
                  </span>
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{pillar.title}</h3>
                    <p className="text-sm text-text-secondary">{pillar.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Flagship Products */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="ผลิตภัณฑ์เรือธง"
            title="สินค้าและบริการที่ขับเคลื่อนผลลัพธ์"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {flagship.map((product) => (
              <GlassCard key={product.title} className="overflow-hidden group">
                <div className="aspect-[16/9] bg-gradient-to-br from-accent/10 to-cyan-cyber/5 flex items-center justify-center">
                  <Brain size={48} className="text-accent/30" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-2">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-glow transition-colors"
                  >
                    ดูรายละเอียด
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Results */}
      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="ผลลัพธ์ที่วัดได้"
            title="ตัวเลขที่บอกถึงความสามารถ"
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold font-number text-gradient-accent">
                  {result.number}
                </p>
                <p className="mt-2 text-sm text-text-secondary">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Trust */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="ความไว้วางใจ"
            title="องค์กรที่ร่วมงานกับเรา"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <GlassCard key={i} className="p-6">
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  "การทำงานกับ AI ACADEMY ทำให้ทีมของเราเปลี่ยนแปลงวิธีการทำงานอย่างสิ้นเชิง
                  จากที่เคยกลัว AI กลายเป็นใช้ AI ขับเคลื่อนงานประจำวัน"
                </p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <p className="text-sm font-medium">คุณลูกค้า {i}</p>
                  <p className="text-xs text-text-muted">ตำแหน่ง, องค์กร</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Knowledge Teaser */}
      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="คลังความรู้"
            title="บทความและทรัพยากรล่าสุด"
            subtitle="อัปเดตความรู้ AI ที่ใช้ได้จริงทุกสัปดาห์"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Prompt Thinking คืออะไร?",
                tag: "บทความ",
              },
              {
                title: "One Source, Multiple Outputs: ระบบผลิตคอนเทนต์ยุคใหม่",
                tag: "E-book",
              },
              {
                title: "เริ่มต้น AI Transformation สำหรับองค์กร",
                tag: "บทความ",
              },
            ].map((article) => (
              <GlassCard key={article.title} className="p-6">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
                  {article.tag}
                </span>
                <h3 className="text-lg font-semibold mb-4">{article.title}</h3>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-glow transition-colors"
                >
                  อ่านต่อ
                  <ChevronRight size={14} />
                </Link>
              </GlassCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/resources">
              <Button variant="secondary">ดูคลังความรู้ทั้งหมด</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Newsletter */}
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="อัปเดต AI ที่ใช้ได้จริง ทุกสัปดาห์"
            subtitle="เคล็ดลับ เครื่องมือ และเทรนด์ AI ส่งตรงถึงอีเมลคุณ"
          />
          <form
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              required
              className="flex-1 h-12 px-5 rounded-xl bg-white/5 backdrop-blur-md text-white-ice placeholder:text-text-muted ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm"
            />
            <Button variant="primary" type="submit">
              สมัครรับข่าวสาร
            </Button>
          </form>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-32 bg-bg-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            เราเชื่อว่า AI ที่ทรงพลังที่สุด
            <br />
            ไม่ได้เริ่มจากเครื่องมือที่ดีที่สุด
            <br />
            แต่เริ่มจาก{" "}
            <span className="text-gradient-accent">คนที่คิดเป็น</span>
          </h2>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="mt-8">
              ปรึกษาโปรเจกต์
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Route,
  Workflow,
  Bot,
  Building2,
  Briefcase,
  Check,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Transform",
  description:
    "เปลี่ยนองค์กร จากทำงานแบบเดิม สู่ AI Organization — AI Transformation, Workflow Design, Agent Development",
};

const steps = [
  "Assessment",
  "Roadmap",
  "Pilot",
  "Capability",
  "AI Organization",
];

const services = [
  {
    icon: Route,
    title: "AI Transformation",
    desc: "เปลี่ยนจากการใช้ AI แบบรายบุคคล ไปสู่การใช้ AI อย่างมีระบบทั้งองค์กร",
    features: [
      "AI Readiness Assessment",
      "AI Roadmap & Strategy",
      "AI Governance & Policy",
      "Change Management",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Design",
    desc: "ออกแบบขั้นตอนการทำงานใหม่ด้วย AI ลดงานซ้ำซ้อน เพิ่มคุณภาพ",
    features: [
      "Workflow Mapping & Analysis",
      "Task Automation",
      "SOP & Template System",
      "Knowledge Base",
    ],
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    desc: "สร้าง AI Agent สำหรับธุรกิจและองค์กร ด้วยขอบเขต หน้าที่ และข้อมูลเฉพาะ",
    features: [
      "Agent Architecture",
      "Role & Knowledge Integration",
      "Tool & Workflow Integration",
      "Guardrails & Evaluation",
    ],
  },
  {
    icon: Building2,
    title: "AI Organization",
    desc: "ออกแบบองค์กรให้ทำงานร่วมกับ AI ได้อย่างมีประสิทธิภาพและปลอดภัย",
    features: [
      "AI-first Operating Model",
      "AI Team Structure & Roles",
      "AI Skills Framework",
      "AI KPI & Operations",
    ],
  },
  {
    icon: Briefcase,
    title: "Consulting & Speaker",
    desc: "บริการให้คำปรึกษา Executive Briefing และ Keynote สำหรับผู้บริหาร",
    features: [
      "Executive Briefing",
      "AI Strategy Consulting",
      "Keynote & Seminar",
      "Executive Coaching",
    ],
  },
];

export default function TransformPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="TRANSFORM"
                title="เปลี่ยนองค์กร จากทำงานแบบเดิม สู่ AI Organization"
                align="left"
                accentWord="AI Organization"
              />
              <p className="mt-6 text-text-secondary leading-relaxed">
                เราช่วยองค์กรเปลี่ยนผ่านจากการใช้ AI แบบรายบุคคล
                สู่ระบบงานที่ขับเคลื่อนด้วย AI อย่างมีกลยุทธ์ ปลอดภัย และวัดผลได้
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    นัด Executive Briefing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-cyber/5 ring-1 ring-border-glow flex items-center justify-center">
              <Building2 size={64} className="text-accent/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="เส้นทางการเปลี่ยนแปลง 5 ขั้นตอน"
            subtitle="จาก Assessment สู่ AI Organization"
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 ring-1 ring-accent/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-accent font-number">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-medium text-text-secondary">
                  {step}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-6 w-full h-px bg-gradient-to-r from-accent/30 to-transparent -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="บริการของเรา"
            title="ครบทุกมิติของการเปลี่ยนแปลงองค์กร"
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <GlassCard
                  key={service.title}
                  className="p-6"
                  hover="lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-text-muted"
                      >
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <SectionHeading
            title="พร้อมเปลี่ยนแปลงองค์กรของคุณ?"
            subtitle="นัด Executive Briefing เพื่อพูดคุยกับทีมที่ปรึกษาของเรา"
          />
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                นัด Executive Briefing
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

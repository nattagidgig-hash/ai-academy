import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, Monitor, Users } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Academy",
  description: "เรียนจริง ลงมือทำจริง ได้ผลงานกลับไปใช้จริง — คอร์ส AI สำหรับทุกสายงาน",
};

const levels = [
  { name: "Beginner", color: "bg-accent/20 text-accent" },
  { name: "Intermediate", color: "bg-cyan-cyber/20 text-cyan-cyber" },
  { name: "Advanced", color: "bg-accent/30 text-accent" },
  { name: "Corporate", color: "bg-white-ice/10 text-white-ice" },
];

const courses = [
  {
    title: "AI Prompt Thinking",
    level: "Beginner",
    result: "ออกแบบ Prompt ที่ใช้งานได้จริงทุกสถานการณ์",
    hours: "8 ชั่วโมง",
    format: "Video On-Demand",
    price: "1,990 บาท",
    slug: "ai-prompt-thinking",
  },
  {
    title: "AI for Work",
    level: "Intermediate",
    result: "ประยุกต์ AI กับงานประจำวัน เพิ่มประสิทธิภาพ 3 เท่า",
    hours: "12 ชั่วโมง",
    format: "Video + Workshop",
    price: "3,990 บาท",
    slug: "ai-for-work",
  },
  {
    title: "AI Content System",
    level: "Advanced",
    result: "ออกแบบระบบผลิตคอนเทนต์ด้วย AI ครบวงจร",
    hours: "16 ชั่วโมง",
    format: "Bootcamp",
    price: "8,900 บาท",
    slug: "ai-content-system",
  },
];

const workshops = [
  {
    title: "AI Prompt Thinking Workshop",
    type: "On-site",
    desc: "ลงมือเขียน Prompt จริง พร้อม Feedback จากผู้สอน",
  },
  {
    title: "AI for Business Workshop",
    type: "Online",
    desc: "ประยุกต์ AI กับธุรกิจของคุณแบบ Real-time",
  },
  {
    title: "Corporate Training",
    type: "องค์กร",
    desc: "ออกแบบหลักสูตรเฉพาะสำหรับทีมและองค์กร",
  },
];

export default function AcademyPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="LEARN"
                title="เรียนจริง ลงมือทำจริง ได้ผลงานกลับไปใช้จริง"
                align="left"
                accentWord="ลงมือทำจริง"
              />
              <div className="mt-8 space-y-4">
                {levels.map((level) => (
                  <div key={level.name} className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${level.color}`}>
                      {level.name}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {level.name === "Beginner" && "ไม่มีพื้นฐานก็เรียนได้"}
                      {level.name === "Intermediate" && "มีประสบการณ์ AI บ้างแล้ว"}
                      {level.name === "Advanced" && "พร้อมสร้างระบบและทีม"}
                      {level.name === "Corporate" && "สำหรับองค์กรและทีม"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-cyber/5 ring-1 ring-border-glow flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🎯</div>
                <p className="text-sm text-text-muted">Learning Path Diagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="คอร์สทั้งหมด"
            title="เลือกคอร์สที่ใช่สำหรับคุณ"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <GlassCard key={course.slug} className="overflow-hidden">
                <div className="aspect-[16/9] bg-gradient-to-br from-accent/10 to-cyan-cyber/5 flex items-center justify-center">
                  <Monitor size={40} className="text-accent/30" />
                </div>
                <div className="p-6 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent">
                    {course.level}
                  </span>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-text-secondary">{course.result}</p>
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {course.hours}
                    </span>
                    <span>{course.format}</span>
                  </div>
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-lg font-bold text-gradient-accent">
                      {course.price}
                    </span>
                    <Link href={`/academy/courses/${course.slug}`}>
                      <Button variant="secondary" size="sm">
                        ดูรายละเอียด
                      </Button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Workshop"
            title="เรียนรู้แบบลงมือทำ"
            subtitle="ทั้ง On-site และ Online พร้อม Feedback จากผู้สอนจริง"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {workshops.map((ws) => (
              <GlassCard key={ws.title} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Users size={24} className="text-accent" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-cyber/20 text-cyan-cyber mb-3">
                  {ws.type}
                </span>
                <h3 className="text-lg font-semibold mb-2">{ws.title}</h3>
                <p className="text-sm text-text-secondary">{ws.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary">
                สนใจ Workshop สำหรับองค์กร
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

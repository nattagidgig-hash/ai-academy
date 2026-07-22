import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronDown, Clock, Monitor, Users, Star } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

const courseData: Record<string, {
  title: string;
  level: string;
  hours: string;
  format: string;
  price: string;
  outcomes: string[];
  description: string;
}> = {
  "ai-prompt-thinking": {
    title: "AI Prompt Thinking",
    level: "Beginner",
    hours: "8 ชั่วโมง",
    format: "Video On-Demand",
    price: "1,990 บาท",
    description:
      "เรียนรู้วิธีคิดและออกแบบ Prompt อย่างเป็นระบบ ตั้งแต่พื้นฐานจนถึงการสร้าง Work Prompt สำหรับงานประเภทต่างๆ",
    outcomes: [
      "เข้าใจหลักการทำงานของ AI และวิธีการสื่อสารกับ AI อย่างมีประสิทธิภาพ",
      "ออกแบบ Prompt ที่ให้ผลลัพธ์ตรงตามความต้องการ",
      "สร้างระบบ Prompt สำหรับงานซ้ำๆ ได้",
      "ประยุกต์ใช้ AI กับงานประจำวันได้ทันที",
    ],
  },
  "ai-for-work": {
    title: "AI for Work",
    level: "Intermediate",
    hours: "12 ชั่วโมง",
    format: "Video + Workshop",
    price: "3,990 บาท",
    description:
      "ยกระดับการทำงานประจำวันด้วย AI ตั้งแต่การวางแผน วิเคราะห์ สร้างสรรค์ ไปจนถึงการตัดสินใจ",
    outcomes: [
      "ประยุกต์ AI กับงานทุกประเภทในชีวิตประจำวัน",
      "สร้าง Workflow อัตโนมัติด้วย AI",
      "วิเคราะห์ข้อมูลและตัดสินใจโดยใช้ AI ช่วย",
      "เพิ่มประสิทธิภาพการทำงานได้ถึง 3 เท่า",
    ],
  },
  "ai-content-system": {
    title: "AI Content System",
    level: "Advanced",
    hours: "16 ชั่วโมง",
    format: "Bootcamp",
    price: "8,900 บาท",
    description:
      "ออกแบบและสร้างระบบผลิตคอนเทนต์ด้วย AI แบบ One Source, Multiple Outputs ครบวงจร",
    outcomes: [
      "ออกแบบระบบผลิตคอนเทนต์ด้วย AI",
      "สร้าง Content Workflow อัตโนมัติ",
      "จัดการ Content หลายช่องทางจากแหล่งข้อมูลเดียว",
      "รักษาความสม่ำเสมอของแบรนด์ในทุกช่องทาง",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) return { title: "ไม่พบคอร์ส" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) {
    return (
      <section className="pt-32 pb-24 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h1 className="text-2xl font-bold mb-4">ไม่พบคอร์สที่คุณค้นหา</h1>
          <Link href="/academy">
            <Button variant="secondary">กลับไปหน้าคอร์สทั้งหมด</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent">
                {course.level}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold">
                {course.title}
              </h1>
              <p className="text-lg text-text-secondary">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Clock size={16} /> {course.hours}
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Monitor size={16} /> {course.format}
                </div>
              </div>

              <div className="pt-6">
                <h2 className="text-xl font-semibold mb-4">
                  เรียนแล้วได้อะไร
                </h2>
                <ul className="space-y-3">
                  {course.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-secondary">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <GlassCard className="p-6">
                <h3 className="font-semibold mb-4">โครงสร้างบทเรียน</h3>
                <div className="space-y-3">
                  {["บทที่ 1: พื้นฐานที่ต้องรู้", "บทที่ 2: การออกแบบ Prompt", "บทที่ 3: เทคนิคขั้นสูง", "บทที่ 4: การประยุกต์ใช้งานจริง"].map(
                    (lesson) => (
                      <details key={lesson} className="group">
                        <summary className="flex items-center justify-between cursor-pointer text-sm text-text-secondary hover:text-white-ice transition-colors py-2">
                          {lesson}
                          <ChevronDown
                            size={16}
                            className="transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <p className="text-xs text-text-muted mt-2 pl-4">
                          รายละเอียดเนื้อหาบทเรียน...
                        </p>
                      </details>
                    )
                  )}
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <GlassCard className="p-6 text-center space-y-6">
                  <p className="text-3xl font-bold text-gradient-accent">
                    {course.price}
                  </p>
                  <Button variant="primary" className="w-full">
                    สมัครเรียนตอนนี้
                  </Button>
                  <p className="text-xs text-text-muted">
                    สมัครวันนี้รับส่วนลดพิเศษ
                  </p>
                </GlassCard>

                <GlassCard className="p-6 space-y-4">
                  <h3 className="font-semibold">เหมาะสำหรับ</h3>
                  <ul className="space-y-2">
                    {["คนทำงานทุกสายงาน", "นักการตลาดและครีเอเตอร์", "ผู้ประกอบการ", "ครูและวิทยากร"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Star size={14} className="text-accent" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </GlassCard>

                <Link href="/contact">
                  <Button variant="secondary" className="w-full">
                    สนใจเวอร์ชันองค์กร
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Layout, ArrowRight, Download } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description: "คลังความรู้ AI — บทความ E-book และ Template สำหรับพัฒนาทักษะ AI",
};

const tabs = ["บทความ", "E-book", "Template & Prompt"];

const blogPosts = [
  {
    title: "AI Prompt Thinking คืออะไร? ทำไมทุกคนต้องเรียนรู้",
    tag: "AI Thinking",
    date: "22 ก.ค. 2026",
  },
  {
    title: "5 ขั้นตอนเริ่มต้น AI Transformation สำหรับองค์กร",
    tag: "Transformation",
    date: "20 ก.ค. 2026",
  },
  {
    title: "One Source, Multiple Outputs: ระบบผลิตคอนเทนต์ยุคใหม่",
    tag: "Content System",
    date: "18 ก.ค. 2026",
  },
  {
    title: "AI Agent คืออะไร? แนวทางการนำไปใช้ในธุรกิจ",
    tag: "AI Agent",
    date: "15 ก.ค. 2026",
  },
  {
    title: "เปรียบเทียบ Claude vs ChatGPT vs Gemini: เลือกยังไงให้เหมาะกับงาน",
    tag: "Tool Guide",
    date: "12 ก.ค. 2026",
  },
  {
    title: "การออกแบบ Workflow ด้วย AI สำหรับทีมการตลาด",
    tag: "Workflow",
    date: "10 ก.ค. 2026",
  },
];

const ebooks = [
  {
    title: "AI Prompt Thinking Guide",
    pages: "48 หน้า",
  },
  {
    title: "AI Content System Playbook",
    pages: "64 หน้า",
  },
  {
    title: "AI Transformation Framework",
    pages: "72 หน้า",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="KNOWLEDGE"
            title="คลังความรู้ AI ที่ใช้ได้จริง"
            subtitle="บทความ E-book และ Template อัปเดตทุกสัปดาห์"
            accentWord="ใช้ได้จริง"
          />
          <div className="mt-12 flex gap-2 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                className="px-5 py-2 rounded-full text-sm font-medium bg-surface-glass text-white-ice ring-1 ring-border-glow hover:bg-surface-hover transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="บทความล่าสุด" title="" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <GlassCard key={post.title} className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent mb-3">
                  {post.tag}
                </span>
                <h3 className="text-base font-semibold mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-text-muted mb-4">{post.date}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-glow transition-colors"
                >
                  อ่านต่อ
                  <ArrowRight size={14} />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="E-book"
            title="ดาวน์โหลดฟรี"
            subtitle="ความรู้เชิงลึกในรูปแบบ E-book พร้อมนำไปใช้ได้ทันที"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {ebooks.map((book) => (
              <GlassCard key={book.title} className="p-6 text-center">
                <div className="w-20 h-28 mx-auto mb-4 rounded-lg bg-gradient-to-br from-accent/20 to-cyan-cyber/10 ring-1 ring-border-glow flex items-center justify-center">
                  <BookOpen size={32} className="text-accent/40" />
                </div>
                <h3 className="text-base font-semibold mb-1">{book.title}</h3>
                <p className="text-xs text-text-muted mb-4">{book.pages}</p>
                <Button variant="secondary" size="sm">
                  <Download size={14} className="mr-2" />
                  ดาวน์โหลดฟรี
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

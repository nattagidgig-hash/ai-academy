"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const contactChannels = [
  {
    icon: MessageCircle,
    label: "LINE Official",
    desc: "ตอบเร็วที่สุด",
    action: "@aiacademy",
    href: "#",
  },
  {
    icon: Mail,
    label: "อีเมล",
    desc: "ตอบภายใน 1 วันทำการ",
    action: "hello@aiacademy.ai",
    href: "mailto:hello@aiacademy.ai",
  },
];

const interests = [
  "คอร์ส",
  "เว็บไซต์",
  "Content System",
  "Transformation",
  "อื่นๆ",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="CONTACT"
            title="มาเริ่มต้นโปรเจกต์ของคุณ"
            subtitle="ไม่ว่าคุณจะมีคำถามหรือพร้อมเริ่มโปรเจกต์ ทีมเราพร้อมช่วยเหลือ"
            accentWord="เริ่มต้น"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  ช่องทางติดต่อ
                </h2>
                <p className="text-sm text-text-secondary mb-6">
                  ทีมงานพร้อมตอบทุกคำถาม ติดต่อเราได้ตามช่องทางด้านล่าง
                </p>
              </div>
              <div className="space-y-4">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <GlassCard key={channel.label} className="p-5">
                      <a
                        href={channel.href}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon size={22} className="text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {channel.label}
                          </p>
                          <p className="text-xs text-text-muted">
                            {channel.desc}
                          </p>
                          <p className="text-sm text-accent mt-0.5">
                            {channel.action}
                          </p>
                        </div>
                      </a>
                    </GlassCard>
                  );
                })}
              </div>
            </div>

            <div>
              {submitted ? (
                <GlassCard className="p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    รับข้อความเรียบร้อย
                  </h3>
                  <p className="text-sm text-text-secondary">
                    ทีมงานของเราจะติดต่อกลับภายใน 1 วันทำการ
                  </p>
                </GlassCard>
              ) : (
                <GlassCard className="p-8">
                  <h2 className="text-lg font-semibold mb-6">
                    ส่งข้อความถึงเรา
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1.5"
                      >
                        ชื่อ *
                      </label>
                      <input
                        id="name"
                        required
                        className="w-full h-12 px-4 rounded-xl bg-white/5 backdrop-blur-md text-white-ice placeholder:text-text-muted ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm"
                        placeholder="ชื่อ-นามสกุล"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1.5"
                      >
                        อีเมล *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full h-12 px-4 rounded-xl bg-white/5 backdrop-blur-md text-white-ice placeholder:text-text-muted ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1.5"
                      >
                        เบอร์โทร / LINE ID
                      </label>
                      <input
                        id="phone"
                        className="w-full h-12 px-4 rounded-xl bg-white/5 backdrop-blur-md text-white-ice placeholder:text-text-muted ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm"
                        placeholder="เบอร์โทรศัพท์หรือ LINE ID"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium mb-1.5"
                      >
                        สนใจเรื่อง *
                      </label>
                      <select
                        id="interest"
                        required
                        className="w-full h-12 px-4 rounded-xl bg-white/5 backdrop-blur-md text-white-ice ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm appearance-none"
                      >
                        <option value="" className="bg-navy-deep">
                          -- เลือก --
                        </option>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-navy-deep">
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="detail"
                        className="block text-sm font-medium mb-1.5"
                      >
                        รายละเอียดเพิ่มเติม
                      </label>
                      <textarea
                        id="detail"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md text-white-ice placeholder:text-text-muted ring-1 ring-inset ring-border-glow focus:ring-accent focus:outline-none transition-all text-sm resize-none"
                        placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ..."
                      />
                    </div>
                    <Button variant="primary" type="submit" className="w-full">
                      <Send size={16} className="mr-2" />
                      ส่งข้อความ
                    </Button>
                  </form>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";

interface ContactFormProps {
  email?: string;
}

export default function ContactForm({ email = "Ntthartka1509@gmail.com" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Open email client with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="glass-card space-y-6 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">ส่งข้อความถึงฉัน</h3>
          <p className="text-muted-foreground text-sm">กรอกข้อมูลด้านล่างเพื่อติดต่อ</p>
        </div>

        {/* Name Input */}
        <div className="uiverse-input-group">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            ชื่อ-นามสกุล
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="กรอกชื่อของคุณ"
              className="uiverse-input w-full pl-12 pr-4 py-4 rounded-xl"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="uiverse-input-group">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
            อีเมล
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="uiverse-input w-full pl-12 pr-4 py-4 rounded-xl"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="uiverse-input-group">
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
            ข้อความ
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-muted-foreground w-5 h-5" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="พิมพ์ข้อความของคุณ..."
              rows={5}
              className="uiverse-input w-full pl-12 pr-4 py-4 rounded-xl resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`uiverse-button w-full py-4 rounded-xl font-semibold text-white ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              กำลังส่ง...
            </span>
          ) : isSubmitted ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              ส่งสำเร็จ!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              ส่งข้อความ
            </span>
          )}
        </motion.button>

        {/* Alternative: Direct Email */}
        <p className="text-center text-sm text-muted-foreground">
          หรือ{" "}
          <a
            href={`mailto:${email}`}
            className="text-primary hover:underline font-medium"
          >
            ส่งอีเมลโดยตรง
          </a>
        </p>
      </form>
    </motion.div>
  );
}

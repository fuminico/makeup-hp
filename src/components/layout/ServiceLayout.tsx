"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string; // Path to the image
}

export function ServiceLayout({ title, subtitle, description, imageSrc }: ServiceLayoutProps) {
  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#service"
            className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" /> サービス一覧に戻る
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary"
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </motion.div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              このサービスについて問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

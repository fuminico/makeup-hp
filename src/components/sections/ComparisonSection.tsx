"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ComparisonSectionProps {
  leftTitle: string;
  leftContent: ReactNode;
  rightTitle: string;
  rightContent: ReactNode;
  className?: string;
}

export const ComparisonSection = ({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  className = '',
}: ComparisonSectionProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${className}`}>
      {/* 左カラム */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-slate-900">
          {leftTitle}
        </h3>
        <div className="text-slate-700 leading-relaxed space-y-4">
          {leftContent}
        </div>
      </motion.div>

      {/* 右カラム */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-slate-900">
          {rightTitle}
        </h3>
        <div className="text-slate-700 leading-relaxed space-y-4">
          {rightContent}
        </div>
      </motion.div>
    </div>
  );
};

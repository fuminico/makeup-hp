"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn, getImagePath } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
        ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
        : "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-3 group">
          <Image
            src={"/images/logo.png"}
            alt="株式会社メイクアップ"
            width={240}
            height={80}
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-500 relative group ${pathname === item.href
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${pathname === item.href ? "w-full" : ""
                }`} />
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-linear-to-r from-blue-600 to-purple-600 text-white"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-slate-900" size={24} />
          ) : (
            <Menu className="text-slate-900" size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center px-8"
            >
              <nav className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-2xl font-bold flex items-center justify-between group ${pathname === item.href ? "text-blue-600" : "text-slate-800"
                        }`}
                    >
                      {item.name}
                      <ChevronRight className={`opacity-0 group-hover:opacity-100 transition-opacity text-blue-500`} />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="block w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white text-center rounded-xl font-bold text-lg shadow-lg"
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, Building2, User, Send } from "lucide-react";

const CONTACT_EMAIL = "makeup.systemdevelopment@gmail.com";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const subject = `お問い合わせ: ${form.name || "匿名"}`;
      const bodyLines = [
        `お名前: ${form.name}`,
        `会社名: ${form.company || "-"}`,
        `メール: ${form.email}`,
        `電話番号: ${form.phone || "-"}`,
        `ご予算: ${form.budget || "-"}`,
        "",
        "お問い合わせ内容:",
        form.message,
      ];

      const mailtoUrl = `mailto:${encodeURIComponent(
        CONTACT_EMAIL
      )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      // ユーザーのメーラーを開く（静的サイトでも動作）
      window.location.href = mailtoUrl;
    } catch (err) {
      setError("メールリンクの生成に失敗しました。お手数ですが直接メールをお送りください。");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                お問い合わせ
              </h1>
              <p className="text-slate-600">
                下記フォームをご入力のうえ送信してください。メールクライアントが開きますので、そのまま送信をお願いします。
              </p>
              <p className="text-slate-500 text-sm mt-2">
                送信先・返信先: {CONTACT_EMAIL}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">お問い合わせフォーム</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <User size={18} className="text-blue-500" />
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="山田 太郎"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Building2 size={18} className="text-blue-500" />
                        会社名
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="例) 株式会社○○"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Mail size={18} className="text-blue-500" />
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Phone size={18} className="text-blue-500" />
                        電話番号
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="090-1234-5678"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">ご予算感</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      <option value="">選択してください</option>
                      <option value="~50万円">〜50万円</option>
                      <option value="50~100万円">50〜100万円</option>
                      <option value="100~300万円">100〜300万円</option>
                      <option value="300万円以上">300万円以上</option>
                      <option value="未定">未定</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="ご相談内容や課題をご記載ください。"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="text-sm text-slate-500">
                      送信ボタンを押すとメールアプリが起動し、{CONTACT_EMAIL}宛てに下書きが生成されます。
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                    >
                      <Send size={18} />
                      送信する
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
                <h3 className="text-xl font-bold text-slate-900">メールでのお問い合わせ</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  こちらのメールアドレス宛てに直接ご連絡いただくことも可能です。お問い合わせ後の連絡も同じアドレスからお送りします。
                </p>
                <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                  <p className="font-mono text-sm text-slate-800">{CONTACT_EMAIL}</p>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>・受付後、担当者よりメールでご連絡いたします。</p>
                  <p>・内容確認のため、お時間をいただく場合があります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

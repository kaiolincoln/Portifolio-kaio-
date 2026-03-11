import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import useInView from '../hooks/useInView.jsx';

// ─────────────────────────────────────────────
// Setup (free): https://www.emailjs.com
//   1. Crie uma conta gratuita
//   2. Vá em Email Services → Add New Service → Gmail (ou outro)
//   3. Vá em Email Templates → Create New Template
//      Use as variáveis: {{from_name}}, {{from_email}}, {{message}}
//   4. Vá em Account → API Keys e copie o Public Key
//   Substitua as três constantes abaixo:
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'SEU_SERVICE_ID';   // ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID';  // ex: 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY';   // ex: 'user_XXXXXXXXXX'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const formRef = useRef(null);

  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      // Lazy-load EmailJS only when actually needed
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm');

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

      // Reset success state after 5 s
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Não foi possível enviar a mensagem. Tente novamente ou use o e-mail diretamente.');
      setStatus('error');
    }
  };

  return (
    <section
      id="contato"
      ref={ref}
      className={`py-20 px-4 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Vamos Conversar?</h2>
        <p className="text-xl text-black dark:text-gray-300 mb-12 text-center">
          Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
        </p>

        {/* Social cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:Kaiolincoln2001@hotmail.com"
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors text-center"
          >
            <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm break-all">Kaiolincoln2001@hotmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/kaio-moreira-02470534b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors text-center"
          >
            <Linkedin className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">Kaio Moreira</p>
          </a>
          <a
            href="https://github.com/kaiolincoln"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-colors text-center"
          >
            <Github className="mx-auto mb-4 text-cyan-400" size={32} />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">@kaiolincoln</p>
          </a>
        </div>

        {/* Contact form */}
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <CheckCircle size={52} className="text-cyan-400" />
              <p className="text-xl font-semibold text-white">Mensagem enviada!</p>
              <p className="text-slate-400 text-sm">Obrigado pelo contato, responderei em breve.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Olá! Gostaria de conversar sobre..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400
                  disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-bold rounded-xl
                  transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}



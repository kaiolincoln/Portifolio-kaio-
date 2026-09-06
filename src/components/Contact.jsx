import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import useInView from '../hooks/useInView.jsx';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const configured = [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].every(value => value?.trim());

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3 });


  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!configured || status === 'loading') return;
    if (!form.name.trim() || !form.message.trim()) { setErrorMsg('Preencha seu nome e sua mensagem.'); setStatus('error'); return; }

    setStatus('loading');
    setErrorMsg('');

    try {
      // Lazy-load EmailJS only when actually needed
      const emailjs = await import('@emailjs/browser');

      await emailjs.default.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

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

          {!configured ? (
            <p className="text-slate-700 dark:text-slate-300">Vamos conversar por e-mail: <a className="underline text-cyan-800 dark:text-cyan-300 break-all" href="mailto:Kaiolincoln2001@hotmail.com">Kaiolincoln2001@hotmail.com</a></p>
          ) : status === 'success' ? (
            <div role="status" className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <CheckCircle size={52} className="text-cyan-400" />
              <p className="text-xl font-semibold text-slate-900 dark:text-white">Mensagem enviada!</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Obrigado pelo contato, responderei em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "loading"}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text" autoComplete="name" maxLength={100}
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email" autoComplete="email" maxLength={254}
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5} maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Olá! Gostaria de conversar sobre..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div role="alert" className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-sm">
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



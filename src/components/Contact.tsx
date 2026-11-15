import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Copy, Check, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedSubject = `Portfolio Inquiry from ${formState.name.trim()}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          _subject: formattedSubject,
          message: formState.message.trim()
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        triggerMailto(formattedSubject);
      }
    } catch {
      triggerMailto(formattedSubject);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailto = (subject: string) => {
    const body = `Name: ${formState.name.trim()}\nEmail: ${formState.email.trim()}\n\nMessage:\n${formState.message.trim()}`;
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="w-full flex justify-center">
      <div className="w-full max-w-[53rem] p-4 sm:p-6 flex flex-col py-[40px] sm:py-[50px] md:py-[80px] px-[1.25rem] sm:px-[1.5rem] md:px-[6rem] items-center gap-[20px] sm:gap-[25px]">
        
        <div id="contact-form" className="w-full flex flex-col items-start">
          
          {/* Title */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white mb-[12px] sm:mb-[16px]">
            Get in touch
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-zinc-400 mb-[22px] sm:mb-[28px] max-w-[600px]">
            I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to send a message or email me directly at{' '}
            <span 
              onClick={handleCopyEmail}
              className="text-black dark:text-white font-medium underline cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors inline-flex items-center gap-1 break-all"
              title="Click to copy email"
            >
              {profileData.email}
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-zinc-400 shrink-0" />}
            </span>.
          </p>

          {/* Submission Success Toast */}
          {submitted && (
            <div className="w-full mb-6 p-4 rounded-[14px] bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Thank you! Your message has been routed directly to my inbox. I will reply shortly.</span>
            </div>
          )}

          {/* Form (Robinson exact replica) */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            
            <div className="grid md:flex gap-4 w-full">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="flex-1 bg-[#f2f2f2] dark:bg-[#16161a] border-[1px] border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] text-black dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="flex-1 bg-[#f2f2f2] dark:bg-[#16161a] border-[1px] border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] text-black dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />
            </div>

            <textarea
              placeholder="Write your Message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-[#f2f2f2] dark:bg-[#16161a] border-[1px] border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] text-black dark:text-white h-[150px] outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black dark:bg-white relative text-white dark:text-black py-[14px] px-[24px] rounded-[14px] text-[16px] font-medium hover:opacity-90 duration-[300ms] transition-all w-full disabled:opacity-70 shadow-sm"
            >
              <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

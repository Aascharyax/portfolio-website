import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Mail, Send, User } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [toastVisible, setToastVisible] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email.';
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setForm(initialForm);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3200);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 border-t border-paper/[.12] pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="premium-heading mt-5">Start with a message. Build from there.</h2>
          <p className="muted-copy mt-6">
            Open to learning opportunities, thoughtful feedback, collaborations, and
            conversations that help turn momentum into better work.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-paper/[.14]">
            <Signal label="Mode" value="Learning" />
            <Signal label="Focus" value="Web craft" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="border border-paper/[.14] bg-graphite p-5 sm:p-8"
        >
          <Input
            icon={<User size={17} />}
            label="Name"
            name="name"
            value={form.name}
            error={errors.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <Input
            icon={<Mail size={17} />}
            label="Email"
            name="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <label className="mt-6 block">
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-muted">
              Message
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Share an idea, opportunity, or hello."
              className="w-full resize-none border border-paper/[.12] bg-ink px-4 py-4 text-sm text-paper outline-none transition placeholder:text-paper/[.32] focus:border-brass"
            />
            {errors.message && <span className="mt-2 block text-xs font-semibold text-clay">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-paper px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:bg-brass sm:w-auto"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="fixed bottom-6 left-1/2 z-[90] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 border border-brass bg-ink p-4 text-sm font-semibold text-paper shadow-editorial"
          >
            <CheckCircle2 className="text-brass" size={21} />
            Message validated successfully.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Input({ icon, label, error, ...props }) {
  return (
    <label className="mt-6 block first:mt-0">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-muted">{label}</span>
      <span className="relative block">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brass">{icon}</span>
        <input
          {...props}
          className="w-full border border-paper/[.12] bg-ink py-4 pl-11 pr-4 text-sm text-paper outline-none transition placeholder:text-paper/[.32] focus:border-brass"
        />
      </span>
      {error && <span className="mt-2 block text-xs font-semibold text-clay">{error}</span>}
    </label>
  );
}

function Signal({ label, value }) {
  return (
    <div className="bg-ink p-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-2 text-xl font-black text-paper">{value}</p>
    </div>
  );
}

export default Contact;

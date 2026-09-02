import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const faqs = [
  {
    question: "How does an initial consultation work?",
    answer:
      "It's a straightforward conversation — typically 45–60 minutes by video call. We'll ask about your current situation, what you're trying to achieve, and what's getting in the way. You'll come away with at least one useful perspective, regardless of whether we work together.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. The majority of our clients are small and medium-sized businesses. We structure our work to be proportionate — you won't pay for resource you don't need.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Typically on a fixed-scope basis — we agree the deliverables and price upfront, so there are no billing surprises. For ongoing advisory relationships, we also offer monthly retainer arrangements.",
  },
  {
    question: "We're not sure what we need — can you still help?",
    answer:
      "That's a common starting point. We're good at helping businesses clarify what they actually need, which is often different from what they thought they needed. A discovery conversation is a good first step.",
  },
  {
    question: "How long do projects typically take?",
    answer:
      "It depends on the scope and complexity of the challenge. We'll help you define the right first step and provide a realistic timeline in any proposal we put together.",
  },
  {
    question: "Do you work remotely or on-site?",
    answer:
      "We work primarily remotely, which keeps costs down and allows us to work with clients anywhere. For larger or more complex engagements, we're happy to arrange on-site sessions when it genuinely adds value.",
  },
];

const services = [
  "IT & Systems Consulting",
  "AI Consulting & Implementation",
  "Web Development",
  "Application Development",
  "Process Automation",
  "Systems Integration",
  "Digital Transformation",
  "Not sure yet",
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, rgba(80,73,178,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Let's talk about your technology and AI priorities
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed"
            >
              No pressure, no sales pitch. Tell us what you're trying to
              improve, understand, or implement, and we'll tell you honestly
              whether and how we can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl font-display font-bold text-foreground mb-6"
                >
                  Contact details
                </motion.h2>

                <div className="space-y-5">
                  <motion.div
                    custom={1}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">
                        Email
                      </p>
                      <a
                        href="mailto:hello@lengasystems.com"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        hello@lengasystems.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">
                        Phone
                      </p>
                      <a
                        href="tel:+12010000000"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        +1 (201) 000-0000
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">
                        Location
                      </p>
                      <p className="text-foreground text-sm">New Jersey, United States</p>
                      <p className="text-muted-foreground text-xs mt-1">Working with clients across the U.S. and internationally</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                custom={4}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-slate-50 border border-border"
              >
                <h4 className="font-display font-semibold text-foreground mb-3 text-sm">
                  What to expect
                </h4>
                <ul className="space-y-2">
                  {[
                    "Response within one business day",
                    "No-obligation initial conversation",
                    "Clear proposal with fixed scope",
                    "Honest assessment of what we can do",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-xs">
                      <CheckCircle size={12} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-10 rounded-2xl border border-primary/20 bg-primary/5">
                  <CheckCircle size={48} className="text-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Message received
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for getting in touch. We'll review your message
                    and respond within one business day. We look forward to
                    speaking with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Area you'd like to discuss
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell us about your business, systems, or challenge{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you trying to achieve? What's the current situation? Any context you can share will help us understand your needs."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-8 text-base font-medium shadow-lg shadow-primary/25"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </Button>
                  <p className="text-muted-foreground text-xs">
                    We respect your privacy and will never share your details
                    with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-3"
            >
              FAQ
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-foreground"
            >
              Frequently asked questions
            </motion.h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i * 0.07}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-display font-medium text-foreground text-sm pr-4">
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-primary shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

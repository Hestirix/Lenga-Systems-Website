import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  Brain,
  Globe,
  Smartphone,
  Zap,
  GitMerge,
  TrendingUp,
  ChevronRight,
  Star,
  Users,
  BarChart3,
  Layers,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    description:
      "We assess your current infrastructure and help you make technology decisions that support growth, reduce cost, and reduce risk.",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description:
      "Practical AI strategy for your business — from identifying the right use cases to deploying solutions that actually work.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites that represent your brand, convert visitors, and are built to perform.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom web and mobile applications tailored to your processes, your team, and your customers.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Identify repetitive manual tasks and replace them with reliable automated workflows that save time and reduce errors.",
  },
  {
    icon: GitMerge,
    title: "Systems Integration",
    description:
      "Connect your existing tools, platforms, and data sources so your business operates as a single, coherent system.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "A structured approach to modernizing your operations — from strategy through implementation.",
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Practical over theoretical",
    description:
      "We build solutions that work in the real world, not slide decks that gather dust. Every recommendation we make is grounded in what your business can actually implement.",
  },
  {
    icon: Layers,
    title: "End-to-end delivery",
    description:
      "From strategy to deployment, we stay with you through the full lifecycle — not just the easy parts.",
  },
  {
    icon: BarChart3,
    title: "Measurable outcomes",
    description:
      "We align our work to business metrics you care about: time saved, cost reduced, revenue enabled, errors eliminated.",
  },
  {
    icon: Clock,
    title: "Clear and efficient process",
    description:
      "No bloated projects, no scope creep theater. We work methodically, communicate clearly, and deliver on time.",
  },
];

const aiUsesCases = [
  "Automate document processing and data extraction",
  "Build internal knowledge bases and AI assistants",
  "Classify customer inquiries and route support tickets",
  "Generate reports and summaries from raw data",
  "Monitor operations and detect anomalies automatically",
  "Analyse customer behaviour to improve retention",
];

const solutions = [
  { label: "Business Websites", desc: "Fast, professional, conversion-focused" },
  { label: "Internal Systems", desc: "Custom tools for your team's daily operations" },
  { label: "Workflow Automation", desc: "Eliminate manual processes at scale" },
  { label: "AI Chatbots", desc: "Smart assistants for support or internal use" },
  { label: "Booking Platforms", desc: "Self-serve scheduling for your customers" },
  { label: "Reporting Dashboards", desc: "Real-time data in one place" },
  { label: "Customer Engagement", desc: "Tools that keep clients coming back" },
  { label: "Process Optimisation", desc: "Systematic improvement of how work gets done" },
];

const testimonials = [
  {
    quote:
      "Lenga Systems helped us go from a spreadsheet-based operation to a fully integrated digital workflow in eight weeks. The difference in efficiency has been remarkable.",
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Thornfield Group",
  },
  {
    quote:
      "We'd been putting off our website rebuild for two years. The team delivered something that genuinely represents our business — professional, fast, and exactly what we needed.",
    name: "James Okafor",
    role: "Managing Director",
    company: "Crestline Advisory",
  },
  {
    quote:
      "The AI pilot they ran for us turned into our most valuable internal tool. Finally, a consultancy that actually delivers what they discuss in the initial meeting.",
    name: "Priya Ramanathan",
    role: "Head of Technology",
    company: "Meridian Financial",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,73,178,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(80,73,178,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5049b2] opacity-10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#5049b2] opacity-8 blur-3xl -translate-x-1/4 translate-y-1/4" />

        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              IT and AI Consultancy
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
            >
              Practical IT and AI{" "}
              <span className="text-primary">Solutions</span> for Modern
              Businesses
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              We help businesses build better digital systems, modernise their
              operations, and implement AI strategies that deliver real
              results — not just potential.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Link href="/contact">
                  Book a Consultation <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-medium border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-16 flex flex-wrap items-center gap-8 text-sm text-slate-400"
            >
              {["IT Consulting", "AI Implementation", "Web & App Development", "Process Automation"].map(
                (tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    {tag}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-display font-bold mb-2">7+</div>
              <div className="text-white/80 text-sm">Core service areas</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">100%</div>
              <div className="text-white/80 text-sm">Business-focused delivery</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">End-to-end</div>
              <div className="text-white/80 text-sm">Strategy through implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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
              What We Do
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5"
            >
              Services built around your business
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From technology strategy to hands-on implementation, we cover the
              full range of what modern businesses need to operate and compete
              effectively.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.05}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <s.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.4}
              variants={fadeUp}
            >
              <Link href="/services">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-primary to-[#3d3890] text-white flex flex-col justify-between min-h-[180px] hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
                  <div>
                    <p className="font-display font-semibold mb-2">View all services</p>
                    <p className="text-white/70 text-sm">Detailed breakdown of each service with business benefits and use cases.</p>
                  </div>
                  <ArrowRight size={20} className="mt-6" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Lenga Systems */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={fadeUp}
                className="text-primary font-medium text-sm uppercase tracking-widest mb-3"
              >
                Why Lenga Systems
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
              >
                Consulting that actually delivers
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-muted-foreground text-lg leading-relaxed mb-8"
              >
                Too many technology projects end with a report instead of a
                result. We operate differently — with a focus on practical
                implementation, clear communication, and outcomes you can
                measure.
              </motion.p>
              <motion.div custom={3} variants={fadeUp}>
                <Button asChild className="rounded-full px-6">
                  <Link href="/about">
                    About our approach <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-white border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI for Business */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, rgba(80,73,178,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.p
                  variants={fadeUp}
                  className="text-primary font-medium text-sm uppercase tracking-widest mb-3"
                >
                  AI for Business
                </motion.p>
                <motion.h2
                  custom={1}
                  variants={fadeUp}
                  className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                  AI that works for your business, not the other way around
                </motion.h2>
                <motion.p
                  custom={2}
                  variants={fadeUp}
                  className="text-slate-300 text-lg leading-relaxed mb-8"
                >
                  Most businesses hear a lot about AI and understand very little
                  about where it actually applies to their situation. We help
                  you cut through the noise — identifying practical use cases,
                  running focused pilots, and implementing systems that create
                  measurable value.
                </motion.p>
                <motion.div custom={3} variants={fadeUp}>
                  <Button
                    asChild
                    className="rounded-full px-6 shadow-lg shadow-primary/25"
                  >
                    <Link href="/services#ai">
                      Explore AI Consulting <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3"
            >
              {aiUsesCases.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i * 0.08}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions / Use Cases */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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
              Real-World Solutions
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5"
            >
              What we build for businesses like yours
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Not abstract capabilities — concrete deliverables that solve real
              operational problems.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.05}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{s.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/solutions">
                Browse all solutions <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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
              Client Outcomes
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-foreground"
            >
              Trusted by businesses that needed real results
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-border flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 flex-1 text-sm">
                  "{t.quote}"
                </p>
                <div className="border-t border-border pt-5">
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Ready to modernise your business?
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
            >
              Start with a straightforward conversation. We'll listen, ask the
              right questions, and tell you honestly what we can help with.
            </motion.p>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base bg-white text-primary hover:bg-white/90 font-medium"
              >
                <Link href="/contact">
                  Book a Consultation <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

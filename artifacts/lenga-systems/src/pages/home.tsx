import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  Brain,
  Cloud,
  Database,
  BarChart3,
  Zap,
  GitMerge,
  TrendingUp,
  Settings,
  ChevronRight,
  Star,
  Users,
  Layers,
  Shield,
  Clock,
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

const services = [
  {
    icon: Monitor,
    title: "IT & Systems Consulting",
    description:
      "We assess the systems your business relies on and help you make clear decisions across technology strategy, infrastructure, cloud, data, and ongoing support.",
  },
  {
    icon: Brain,
    title: "AI Consulting & Implementation",
    description:
      "From readiness and opportunity assessment to practical adoption, integration, and responsible implementation, we help AI create useful business value.",
  },
  {
    icon: GitMerge,
    title: "Systems Integration",
    description:
      "Connect the tools, platforms, and data sources your business relies on so information moves reliably between them.",
  },
  {
    icon: Cloud,
    title: "Cloud & Technology Infrastructure",
    description:
      "Plan and improve the cloud, hosting, backup, recovery, and infrastructure foundations that support your operations.",
  },
  {
    icon: BarChart3,
    title: "Data & Business Intelligence",
    description:
      "Turn the data you already have into reporting, dashboards, and decision support that helps your team act with confidence.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Identify repetitive manual tasks and replace them with reliable automated workflows that save time and reduce errors.",
  },
  {
    icon: Settings,
    title: "Custom Business Systems",
    description:
      "Build internal systems, portals, applications, and digital business platforms when off-the-shelf tools are not enough.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "Modernise the way your business operates with a practical roadmap from strategy through implementation.",
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
      "From assessment to implementation and adoption, we stay with you through the full lifecycle — not just the easy parts.",
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
  { label: "Technology Roadmaps", desc: "Priorities aligned to business goals" },
  { label: "Integrated Business Systems", desc: "Connected tools for dependable operations" },
  { label: "AI Assistants & Knowledge Tools", desc: "Practical AI for teams and customers" },
  { label: "Workflow Automation", desc: "Less manual work and fewer errors" },
  { label: "Data & BI Reporting", desc: "Useful insight from the data you already have" },
  { label: "Cloud & Infrastructure", desc: "Reliable foundations for modern operations" },
   { label: "Digital Business Platforms", desc: "Web systems, portals, and platforms built around a real need" },
  { label: "Process Improvement", desc: "A clearer, more effective way of working" },
];

const testimonials = [
  {
    quote:
      "Start with the business problem, understand the systems around it, and recommend only what will genuinely help.",
    name: "Practical recommendations",
    role: "A Lenga Systems principle",
  },
  {
    quote:
      "Move from strategy to implementation with clear decisions, useful documentation, and a solution your team can adopt.",
    name: "Implementation that sticks",
    role: "A Lenga Systems principle",
  },
  {
    quote:
      "Remain a technology partner as needs evolve — not just an adviser who leaves behind a report.",
    name: "Long-term partnership",
    role: "A Lenga Systems principle",
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
              Lenga Systems | IT & AI Consultancy
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
            >
              IT & AI consultancy for the systems your business relies on
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              We help businesses understand, improve, and implement the
              technology systems they rely on — from IT strategy and systems
              integration to practical AI adoption.
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
              {["IT & Systems Consulting", "AI Implementation", "Systems Integration", "Process Automation"].map(
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
              <div className="text-4xl font-display font-bold mb-2">IT & Systems</div>
              <div className="text-white/80 text-sm">Technology strategy and improvement</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">AI-ready</div>
              <div className="text-white/80 text-sm">Practical adoption and implementation</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">End-to-end</div>
              <div className="text-white/80 text-sm">Assessment through implementation</div>
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
              Technology services built around your business
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              We advise, design, implement, and support — bringing together
              technology strategy, systems improvement, AI implementation, and
              the delivery capabilities needed to solve the right business
              problem.
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
                  you assess readiness, identify practical opportunities, guide
                  adoption, and implement AI that fits your existing systems and
                  people.
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
              What we bring to every engagement
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-bold text-foreground"
            >
              A technology partner focused on useful progress
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
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
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

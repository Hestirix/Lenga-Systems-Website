import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Brain,
  Globe,
  Smartphone,
  Zap,
  GitMerge,
  TrendingUp,
  CheckCircle,
  ChevronRight,
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
    id: "it",
    icon: Monitor,
    title: "IT Consulting",
    tagline: "Technology decisions you can trust",
    overview:
      "We help businesses assess their current technology landscape, identify gaps and inefficiencies, and make informed decisions about systems, infrastructure, and tooling — without the complexity and cost of a large consulting firm.",
    benefits: [
      "Objective assessment of your current IT environment",
      "Clear technology roadmap aligned to business goals",
      "Vendor selection and procurement support",
      "Risk identification and mitigation planning",
      "Cost optimisation through better tooling decisions",
    ],
    useCases: [
      "A professional services firm needing to understand which systems to consolidate before a growth phase",
      "A business moving from on-premise infrastructure to cloud-based services",
      "An organisation needing an honest review of its IT spend and capability",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Consulting",
    tagline: "Practical AI, not AI theatre",
    overview:
      "We help businesses understand where AI can create genuine value in their operations — and then help them implement it. From identifying the right use cases to deploying production-ready solutions, we make AI accessible and actionable.",
    benefits: [
      "Clear identification of where AI creates real ROI in your business",
      "Structured pilots that prove value before full investment",
      "Integration of AI into existing tools and workflows",
      "Staff training and change management support",
      "Honest assessment of what AI can and cannot do for you",
    ],
    useCases: [
      "A financial services firm wanting to automate document review and data extraction",
      "A professional services business building an internal knowledge assistant",
      "A customer-facing business looking to improve support response quality and speed",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    tagline: "A website that represents your business properly",
    overview:
      "We build professional, high-performance websites for businesses that need more than a template. Every site we build is designed to reflect your brand, communicate clearly with your audience, and perform reliably in production.",
    benefits: [
      "Custom design tailored to your brand and audience",
      "Fast-loading, SEO-optimised structure",
      "Mobile-first, fully responsive layout",
      "Integrated content management for your team to update",
      "Ongoing technical support after launch",
    ],
    useCases: [
      "A professional services firm whose current website doesn't reflect the quality of its work",
      "A growing business that needs a scalable marketing platform",
      "A company entering a new market that needs a credible digital presence",
    ],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    tagline: "Custom software for the way your business actually works",
    overview:
      "Off-the-shelf software rarely fits exactly. We build custom web and mobile applications that are built around your processes, your workflows, and the way your team actually operates.",
    benefits: [
      "Software designed around your exact operational requirements",
      "Clean, maintainable codebase you own and can build on",
      "Integrated with your existing tools and data sources",
      "Built for your team's capability to manage and expand",
      "Clear documentation and knowledge transfer included",
    ],
    useCases: [
      "A logistics company needing a bespoke operations management portal",
      "A healthcare provider building a patient-facing booking and communications platform",
      "An agency wanting a branded client portal for project tracking and delivery",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation",
    tagline: "Less manual work, fewer errors, more capacity",
    overview:
      "Manual processes that depend on people doing the same repetitive task reliably are a risk. We map your workflows, identify what can be automated, and implement reliable systems that handle the repetitive work so your team can focus on what requires human judgement.",
    benefits: [
      "Identification and prioritisation of automation opportunities",
      "Reduction in manual errors and process inconsistency",
      "Time savings across operational teams",
      "Integration with existing tools and data sources",
      "Monitoring and alerting to ensure automations run reliably",
    ],
    useCases: [
      "A professional services firm automating invoice generation and client reporting",
      "A business reducing the time spent manually moving data between systems",
      "An operations team eliminating a weekly manual reporting process",
    ],
  },
  {
    id: "integration",
    icon: GitMerge,
    title: "Systems Integration",
    tagline: "Make your tools work together",
    overview:
      "Most businesses run on multiple platforms that don't communicate with each other. We connect your systems — CRM, ERP, finance tools, communication platforms, and custom applications — so data flows correctly and your team doesn't have to re-enter information manually.",
    benefits: [
      "Single source of truth across your business systems",
      "Elimination of manual data transfer and re-entry",
      "Real-time synchronisation between connected platforms",
      "Reduced operational errors from inconsistent data",
      "Scalable integration architecture as your toolstack grows",
    ],
    useCases: [
      "A business connecting its CRM, accounting software, and project management platform",
      "An e-commerce operation syncing inventory, orders, and fulfilment across systems",
      "An organisation integrating a new business system with legacy infrastructure",
    ],
  },
  {
    id: "transformation",
    icon: TrendingUp,
    title: "Digital Transformation",
    tagline: "Modernise the way your business operates",
    overview:
      "Digital transformation isn't a single project — it's a structured programme of change. We help businesses plan and execute their transformation in a phased, practical way that delivers measurable progress at each stage rather than a promise delivered years later.",
    benefits: [
      "Clear transformation roadmap with realistic milestones",
      "Change management support to bring your team along",
      "Technology selection aligned to long-term business goals",
      "Phased delivery that produces value throughout",
      "Leadership coaching on technology-led decision making",
    ],
    useCases: [
      "A traditional business moving from paper and spreadsheet-based operations to digital systems",
      "A growing company standardising and scaling its operations ahead of further growth",
      "An established organisation modernising to compete with more digitally native competitors",
    ],
  },
];

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 40%, rgba(80,73,178,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4"
            >
              Our Services
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Everything your business needs to modernise and grow
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed"
            >
              Seven core service areas, each delivering clear business value. We
              work across strategy, design, development, and operations — so you
              don't need a different partner for every phase.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-border sticky top-[72px] z-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 md:py-28 ${index % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
          >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <motion.p
                    variants={fadeUp}
                    className="text-primary font-medium text-sm mb-2"
                  >
                    {service.tagline}
                  </motion.p>
                  <motion.h2
                    custom={1}
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    custom={2}
                    variants={fadeUp}
                    className="text-muted-foreground leading-relaxed mb-8"
                  >
                    {service.overview}
                  </motion.p>
                  <motion.div custom={3} variants={fadeUp}>
                    <Button asChild className="rounded-full px-6">
                      <Link href="/contact">
                        Discuss this service <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Details */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="p-7 rounded-2xl border border-border bg-white">
                    <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wide">
                      Business Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-7 rounded-2xl border border-border bg-white">
                    <h4 className="font-display font-semibold text-foreground mb-5 text-sm uppercase tracking-wide">
                      Example Use Cases
                    </h4>
                    <ul className="space-y-4">
                      {service.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-primary text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-muted-foreground text-sm leading-relaxed">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              Not sure which service you need?
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              Start with a conversation. We'll help you understand what your
              situation actually calls for — without any obligation.
            </motion.p>
            <motion.div custom={2} variants={fadeUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base bg-white text-primary hover:bg-white/90 font-medium"
              >
                <Link href="/contact">
                  Book a Free Consultation <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

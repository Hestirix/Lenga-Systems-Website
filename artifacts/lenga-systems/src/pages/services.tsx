import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Brain,
  Cloud,
  Database,
  BarChart3,
  Zap,
  GitMerge,
  Settings,
  LifeBuoy,
  Layers,
  CheckCircle,
  ChevronRight,
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
    id: "it",
    icon: Monitor,
    title: "IT & Systems Consulting",
    tagline: "Technology decisions you can trust",
    overview:
      "We help businesses understand the technology landscape they depend on, identify gaps and inefficiencies, and make informed decisions across strategy, systems, infrastructure, cloud, data, and ongoing support.",
    benefits: [
      "Objective assessment of your current IT and systems environment",
      "Technology roadmap aligned to business goals and priorities",
      "Technology assessments, solution planning, and IT advisory",
      "Systems, infrastructure, cloud, and tooling guidance",
      "Digital modernization and ongoing support considerations",
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
    title: "AI Consulting & Implementation",
    tagline: "Practical AI, not AI theatre",
    overview:
      "We help businesses assess their readiness for AI, identify worthwhile opportunities, and move from exploration to responsible implementation. That can include workflow automation, internal assistants, AI integrated with existing systems, and support for adoption.",
    benefits: [
      "AI readiness and opportunity assessment",
      "Practical adoption plan based on your business context",
      "Focused pilots and implementation support",
      "AI assistants, workflow automation, and system integration",
      "Responsible AI guidance, training, and adoption support",
    ],
    useCases: [
      "A financial services firm wanting to automate document review and data extraction",
      "A professional services business building an internal knowledge assistant",
      "A customer-facing business looking to improve support response quality and speed",
    ],
  },
  {
    id: "integration",
    icon: GitMerge,
    title: "Systems Integration",
    tagline: "Make your tools work together",
    overview:
      "Most businesses run on multiple platforms that do not communicate with each other. We connect business systems, databases, cloud platforms, and third-party software so data flows correctly and teams do not have to re-enter information manually.",
    benefits: [
      "API and business system integration",
      "Connecting fragmented platforms and data sources",
      "Reliable data movement between connected systems",
      "Reduced operational errors and duplicate entry",
      "Integration architecture that can grow with your business",
    ],
    useCases: [
      "A business connecting its CRM, accounting software, and project management platform",
      "An organisation integrating a new business system with existing databases",
      "A team replacing manual data transfer between cloud and third-party platforms",
    ],
  },
  {
    id: "infrastructure",
    icon: Cloud,
    title: "Cloud & Technology Infrastructure",
    tagline: "Reliable foundations for modern operations",
    overview:
      "We help businesses plan and improve the cloud and infrastructure foundations behind their operations, with practical guidance across architecture, deployment, hosting, backup, recovery, and administration.",
    benefits: [
      "Cloud architecture and deployment planning",
      "Hosting and infrastructure improvement",
      "Backup and recovery planning",
      "System administration and infrastructure guidance",
      "Practical recommendations proportionate to your current needs",
    ],
    useCases: [
      "A growing business reviewing its hosting and deployment setup",
      "A team formalising backup and recovery for critical systems",
      "An organisation planning a phased move from on-premise infrastructure to cloud services",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data & Business Intelligence",
    tagline: "Useful insight from the data you already have",
    overview:
      "We help businesses bring together their operational data and turn it into reporting, dashboards, analytics, and decision-support systems that make important information easier to understand and act on.",
    benefits: [
      "Business intelligence and operational reporting",
      "Data integration from multiple business systems",
      "Dashboards designed around roles and decisions",
      "Performance measurement and trend analysis",
      "Clearer decision support for operational teams",
    ],
    useCases: [
      "A leadership team needing a clearer view of operational performance",
      "A business replacing delayed spreadsheet reports with connected dashboards",
      "An organisation combining data from several systems for more useful analysis",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Process Automation",
    tagline: "Less manual work, fewer errors, more capacity",
    overview:
      "Manual processes that depend on people doing the same repetitive task reliably are a risk. We map workflows, identify what can be automated, and implement reliable systems for approvals, notifications, data movement, and repetitive work.",
    benefits: [
      "Identification and prioritisation of automation opportunities",
      "Workflow automation for approvals and notifications",
      "Reduction in manual errors and process inconsistency",
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
    id: "custom-systems",
    icon: Layers,
    title: "Custom Business Systems",
    tagline: "Technology shaped around the way you work",
    overview:
      "When off-the-shelf tools are not enough, we design and build internal systems, workforce platforms, portals, operational applications, and digital business platforms around your processes and people.",
    benefits: [
      "Internal systems and workforce platforms",
      "Scheduling systems, portals, and operational applications",
      "Digital business platforms for customers and teams",
      "Integration with existing tools and data",
      "Clear documentation and knowledge transfer",
    ],
    useCases: [
      "A business replacing fragile spreadsheets with an internal operational system",
      "A team needing a portal that brings together customers, staff, and workflows",
      "An organisation requiring custom software where existing tools cannot meet an important need",
    ],
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Managed Technology Support",
    tagline: "Support that keeps improvements moving",
    overview:
      "We provide practical ongoing support for the technology we help plan and implement, including hosting, maintenance, monitoring, technical administration, and continuous improvement as your needs evolve.",
    benefits: [
      "Hosting, maintenance, and system support",
      "Monitoring and technical administration",
      "Ongoing improvement planning",
      "Clear ownership and documentation",
      "Support proportionate to your business and team",
    ],
    useCases: [
      "A small team needing dependable support for its core business systems",
      "A business wanting ongoing maintenance after a systems or automation project",
      "An organisation that needs technical administration without building a large internal team",
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
              IT and AI consultancy for practical business improvement
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed"
            >
              We advise, design, implement, and support. Lenga Systems brings
              together IT and systems consulting, AI consulting and
              implementation, and the delivery capabilities needed to improve
              how your business operates.
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

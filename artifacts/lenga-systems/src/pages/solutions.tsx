import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Database,
  Zap,
  MessageSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  TrendingUp,
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

const solutions = [
  {
    icon: Globe,
    title: "Business Websites",
    category: "Web Presence",
    description:
      "A professional website that accurately represents your business and drives the right enquiries. We build fast, SEO-optimised, mobile-first websites that convert visitors into leads.",
    features: [
      "Custom design aligned to your brand",
      "Mobile-first, performance-optimised build",
      "SEO-ready structure from day one",
      "Content management integration",
      "Analytics and conversion tracking",
    ],
    outcome:
      "A credible digital presence that works for your business around the clock.",
  },
  {
    icon: Database,
    title: "Internal Business Systems",
    category: "Operational Tools",
    description:
      "Custom software built for the way your team actually works. Replace fragile spreadsheets and disconnected tools with a single, reliable system designed for your specific workflows.",
    features: [
      "Role-based access and permissions",
      "Integration with existing data sources",
      "Custom reporting and audit trails",
      "Scalable as your team grows",
      "Full documentation and training",
    ],
    outcome:
      "Operations that run on reliable systems instead of individual expertise and workarounds.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    category: "Process Efficiency",
    description:
      "Identify the manual, repetitive processes consuming your team's time and automate them. From data entry and notifications to multi-step approval workflows, we build automations that run reliably in the background.",
    features: [
      "Process mapping and opportunity identification",
      "Integration between existing tools",
      "Custom automation logic and business rules",
      "Error handling and alerting",
      "Performance monitoring and reporting",
    ],
    outcome:
      "Hours reclaimed each week, errors eliminated, and capacity freed for higher-value work.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots and Assistants",
    category: "AI Solutions",
    description:
      "Deploy AI assistants that handle customer enquiries, guide users through complex processes, or serve as an internal knowledge tool for your team. Built on proven models, configured for your context.",
    features: [
      "Trained on your business knowledge and processes",
      "Integrated with your existing website or platforms",
      "Escalation paths to human support when needed",
      "Conversation logging and analytics",
      "Regular review and improvement cycle",
    ],
    outcome:
      "Faster responses for customers, less time spent on routine queries for your team.",
  },
  {
    icon: Calendar,
    title: "Booking and Scheduling Platforms",
    category: "Customer Experience",
    description:
      "Give your customers a self-serve booking experience that reflects the quality of your service. We build booking platforms that fit your availability rules, communicate professionally, and integrate with your existing calendar and CRM tools.",
    features: [
      "Custom availability and rule configuration",
      "Automated confirmation and reminder communications",
      "Payment collection and deposit handling",
      "CRM and calendar integration",
      "Mobile-optimised customer experience",
    ],
    outcome:
      "Reduced admin overhead and a better first impression for new customers.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboards",
    category: "Business Intelligence",
    description:
      "Real-time visibility into the metrics that matter. We build dashboards that pull data from across your systems and present it in a format that supports faster, more informed decisions.",
    features: [
      "Data aggregation from multiple sources",
      "Customisable views by role and department",
      "Automated refresh and alert triggers",
      "Export and sharing capabilities",
      "Historical trend analysis",
    ],
    outcome:
      "Decision-making based on current, accurate data rather than gut feel or delayed reports.",
  },
  {
    icon: Users,
    title: "Customer Engagement Tools",
    category: "Client Experience",
    description:
      "Build the digital infrastructure that keeps your customers engaged and informed. From client portals and onboarding flows to automated communications and feedback systems.",
    features: [
      "Branded client-facing portals",
      "Automated welcome and onboarding sequences",
      "Customer feedback and satisfaction tracking",
      "Retention trigger and re-engagement logic",
      "Integration with your CRM and communication tools",
    ],
    outcome:
      "Higher retention, better client relationships, and reduced churn.",
  },
  {
    icon: Settings,
    title: "Process Optimisation",
    category: "Operational Efficiency",
    description:
      "A structured review of how work gets done in your business, identifying the friction points, inefficiencies, and risks that are costing you time and money — followed by a practical improvement plan.",
    features: [
      "Current-state process mapping",
      "Bottleneck and inefficiency identification",
      "Prioritised improvement roadmap",
      "Implementation support for agreed changes",
      "Change management guidance for your team",
    ],
    outcome:
      "Leaner operations, faster throughput, and fewer process-related errors.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation Strategy",
    category: "Strategic Consulting",
    description:
      "A clear, honest plan for modernising your business — with realistic timelines, defined outcomes, and a sequenced delivery approach that creates value at each phase rather than promising everything upfront.",
    features: [
      "Current-state technology assessment",
      "Gap analysis and prioritisation",
      "Multi-year transformation roadmap",
      "Budget and resource planning",
      "Governance and progress measurement framework",
    ],
    outcome:
      "A transformation that actually completes, delivers measurable value, and brings your team along.",
  },
];

export default function Solutions() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 60%, rgba(80,73,178,0.6) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4"
            >
              Solutions
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Real solutions for real business problems
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed"
            >
               Not abstract capabilities or frameworks — practical solution
               patterns that address the operational challenges businesses like
               yours face. Each can be shaped around your systems, people, and
               priorities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Left panel */}
                <div className="p-8 bg-slate-50 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <solution.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-primary text-xs font-medium uppercase tracking-widest mb-2">
                    {solution.category}
                  </span>
                  <h3 className="font-display font-bold text-foreground text-xl mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  <div className="mt-6">
                    <Link href="/contact">
                      <button className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200">
                        Enquire about this <ChevronRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
                  <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wide mb-5">
                    What's included
                  </h4>
                  <ul className="space-y-3">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wide mb-5">
                      Business outcome
                    </h4>
                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-foreground text-sm leading-relaxed italic">
                        "{solution.outcome}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How we work
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5"
            >
              A clear, structured process from enquiry to delivery
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We start with a conversation to understand your situation, goals, and constraints. No pressure, no sales pitch.",
              },
              {
                step: "02",
                title: "Proposal",
                desc: "We provide a clear proposal with defined scope, deliverables, timeline, and fixed cost. No surprises.",
              },
              {
                step: "03",
                title: "Delivery",
                desc: "We build iteratively with regular communication and checkpoints. You see progress throughout, not just at the end.",
              },
              {
                step: "04",
                title: "Handover",
                desc: "We complete full documentation, training, and a structured handover so your team can manage what we've built.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
                className="relative"
              >
                <div className="p-7 rounded-2xl bg-white border border-border h-full">
                  <div className="text-5xl font-display font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-muted-foreground">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Have a specific problem in mind?
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              Tell us what you're trying to solve. We'll come back with an
              honest assessment and a clear proposal.
            </motion.p>
            <motion.div custom={2} variants={fadeUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base bg-white text-primary hover:bg-white/90 font-medium"
              >
                <Link href="/contact">
                  Start a Conversation <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

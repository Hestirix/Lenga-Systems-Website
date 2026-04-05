import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Eye,
  Lightbulb,
  Shield,
  Users,
  Handshake,
  TrendingUp,
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

const values = [
  {
    icon: Target,
    title: "Practicality first",
    description:
      "Every recommendation we make is one we would implement ourselves. We favour solutions that are workable, maintainable, and proportionate to your actual situation.",
  },
  {
    icon: Shield,
    title: "Integrity in everything",
    description:
      "We tell you what we honestly think — including when the answer is 'you don't need that yet'. Your long-term success is the only metric that matters.",
  },
  {
    icon: Lightbulb,
    title: "Clarity over complexity",
    description:
      "Technology can be complicated. Working with us shouldn't be. We explain things plainly, document what we build, and make sure your team understands what's been implemented.",
  },
  {
    icon: TrendingUp,
    title: "Delivery over discussion",
    description:
      "Consultancies can talk indefinitely. We prefer to get things done. Our process is structured to move from strategy to implementation quickly and without unnecessary friction.",
  },
  {
    icon: Handshake,
    title: "Partnership, not transactions",
    description:
      "We don't disappear after launch. We build relationships with our clients and remain available as your needs evolve over time.",
  },
  {
    icon: Users,
    title: "Respect for your team",
    description:
      "We work with your people, not around them. Technology that your team doesn't understand or trust won't deliver value — so we make adoption part of every project.",
  },
];

const differentiators = [
  "We implement, not just advise",
  "We write clear proposals with fixed scopes",
  "We work across strategy and execution",
  "We remain involved through adoption, not just launch",
  "We're honest about what AI can and cannot do",
  "We build for your current team's capabilities",
];

const teamPlaceholders = [
  {
    name: "Alex Lenga",
    role: "Founder & Principal Consultant",
    bio: "15 years working across technology strategy, software delivery, and digital transformation for organisations across financial services, professional services, and the public sector.",
  },
  {
    name: "Senior Technology Lead",
    role: "Engineering & Architecture",
    bio: "Deep background in systems integration, cloud architecture, and custom software development. Focused on building things that are robust, scalable, and practical to maintain.",
  },
  {
    name: "AI Practice Lead",
    role: "AI Strategy & Implementation",
    bio: "Specialist in practical AI adoption — from identifying the right use cases to deploying solutions in production environments where they create measurable value.",
  },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1a1440] to-slate-900 py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(80,73,178,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4"
            >
              About Lenga Systems
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              A consultancy built on delivery, not promises
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-slate-300 text-lg leading-relaxed"
            >
              Lenga Systems was founded on a simple frustration: too many
              technology projects produce reports, presentations, and
              recommendations — but not working systems. We exist to close that
              gap.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
              >
                What we are
              </motion.h2>
              <motion.div
                custom={1}
                variants={fadeUp}
                className="space-y-5 text-muted-foreground leading-relaxed"
              >
                <p>
                  Lenga Systems is an IT and AI consultancy helping small,
                  medium, and growing businesses improve their operations,
                  modernise their technology, and implement practical digital
                  solutions that create measurable value.
                </p>
                <p>
                  We are not a large firm. We don't have 200 consultants, and
                  we don't pitch generic frameworks. What we do have is deep
                  technical expertise, real implementation experience, and a
                  direct approach to getting things done.
                </p>
                <p>
                  Our clients are businesses that want to work with
                  technologists who understand their context, communicate
                  clearly, and can move from strategy to working software
                  without losing something in translation.
                </p>
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="p-8 rounded-2xl bg-slate-50 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To help businesses use technology more effectively — not by
                  chasing trends, but by implementing the right solutions for
                  the right problems, in a way that actually works in practice.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.1}
                className="p-8 rounded-2xl bg-slate-50 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A world where technology genuinely serves business goals —
                  where AI and digital tools are accessible, understandable, and
                  valuable to organisations of every size, not just those with
                  large technology teams and unlimited budgets.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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
                What sets us apart
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
              >
                Why clients choose Lenga Systems over larger firms
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                Large consultancies are structured to sell large engagements.
                We're structured to solve your actual problem — with the right
                level of resource, at the right pace, with people who stay
                involved from start to finish.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-3"
            >
              {differentiators.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i * 0.07}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5"
            >
              The principles we work by
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              These aren't aspirational statements. They're how we actually
              operate, day to day, with every client.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.08}
                variants={fadeUp}
                className="p-7 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              The Team
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5"
            >
              People who have done this before
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamPlaceholders.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.1}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
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
              Let's talk about your project
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              No commitment required. Just a conversation about where you are
              and what you're trying to achieve.
            </motion.p>
            <motion.div custom={2} variants={fadeUp}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base bg-white text-primary hover:bg-white/90 font-medium"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

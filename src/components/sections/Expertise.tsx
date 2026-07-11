"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, MessageSquareCode, Eye, Cpu } from 'lucide-react';

interface ExpertisePillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
  colorClass: string;
  bgClass: string;
}

export const Expertise: React.FC = () => {
  const pillars: ExpertisePillar[] = [
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Data Analytics",
      desc: "Transforming raw data into actionable business and clinical insights through advanced SQL, Python modelling, and interactive dashboards.",
      colorClass: "text-[#F47C20]",
      bgClass: "bg-[#F47C20]/5"
    },
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "Machine Learning",
      desc: "Training and evaluating predictive models (from traditional regressors to gradient boosting classifiers) to solve complex classification problems.",
      colorClass: "text-[#E8A317]",
      bgClass: "bg-[#E8A317]/5"
    },
    {
      icon: <MessageSquareCode className="w-7 h-7" />,
      title: "Natural Language Processing",
      desc: "Developing clinical NLP applications, fine-tuning large language models, and mapping raw texts to standardized clinical database tables.",
      colorClass: "text-[#138A8A]",
      bgClass: "bg-[#138A8A]/5"
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Computer Vision",
      desc: "Applying deep convolutional neural networks and object detection frameworks to analyze clinical scans, imaging data, and visual feeds.",
      colorClass: "text-[#2E8B57]",
      bgClass: "bg-[#2E8B57]/5"
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Automation",
      desc: "Orchestrating automated pipelines and agentic frameworks (using LangChain and crewAI) to run tasks and synchronize database schemas.",
      colorClass: "text-[#4B2E2A]",
      bgClass: "bg-[#4B2E2A]/5"
    }
  ];

  return (
    <section id="expertise" className="relative py-20 md:py-28 bg-[#FAF8F3]/60 relative z-20 border-t border-[#4B2E2A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Headline Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#4B2E2A]/10 shadow-sm lg:col-span-1"
          >
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-[#F47C20] mb-3 block">
                What I Do
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4B2E2A] leading-tight mb-4">
                Data. <br />
                Intelligence. <br />
                Impact.
              </h2>
            </div>
            <p className="font-sans text-sm text-[#4B2E2A]/60 leading-relaxed mt-6">
              I specialize in bridging the gap between raw data systems and clinical/business impact, leveraging cutting-edge intelligence to drive real-world transformation.
            </p>
          </motion.div>

          {/* Pillars Mapping */}
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-white border border-[#4B2E2A]/10 hover:border-[#F47C20]/30 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
            >
              <div className={`p-3 rounded-xl ${pillar.bgClass} ${pillar.colorClass} mb-6`}>
                {pillar.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#4B2E2A] mb-3">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#4B2E2A]/70 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

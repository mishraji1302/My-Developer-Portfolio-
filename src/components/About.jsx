import SectionWrapper from "./SectionWrapper";
import { PORTFOLIO_DATA } from "../constants";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const { education } = PORTFOLIO_DATA;
  
  return (
    <SectionWrapper id="about" className="py-32 md:py-48 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-medium text-gray-200 leading-relaxed"
        >
          Currently pursuing my degree in Computer Science, I bridge the gap between academic theory and intelligent software solutions. Obsessed with building scalable web applications, exploring Machine Learning, and turning complex data into real-world impact.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="glass-card flex flex-col md:flex-row items-center gap-6 px-8 py-6 rounded-2xl max-w-2xl w-full text-left">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
              <GraduationCap className="text-green-400" size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Undergraduate Studies</h3>
              <p className="text-gray-300 font-medium text-sm mb-1">{education.university}</p>
              <p className="text-gray-400 text-sm mb-3">{education.degree} • {education.year}</p>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md text-sm font-semibold text-green-300 border border-white/5">
                Current GPA: {education.gpa}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Connect on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;

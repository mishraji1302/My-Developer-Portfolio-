import { motion } from "framer-motion";
import { Database, Server, Settings, Code2, Terminal, BrainCircuit } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { PORTFOLIO_DATA } from "../constants";

const skillConfig = {
  "Java": { slug: "java", url: "https://www.java.com/" },
  "Python": { slug: "python", url: "https://www.python.org/" },
  "JavaScript": { slug: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  "C": { slug: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  "React.js": { slug: "react", url: "https://react.dev/" },
  "Node.js": { slug: "nodedotjs", url: "https://nodejs.org/" },
  "Angular.js": { slug: "angular", url: "https://angular.io/" },
  "HTML": { slug: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  "CSS": { slug: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  "REST API": { slug: null, url: "#" },
  "PostgreSQL": { slug: "postgresql", url: "https://www.postgresql.org/" },
  "MySQL": { slug: "mysql", url: "https://www.mysql.com/" },
  "MongoDB": { slug: "mongodb", url: "https://www.mongodb.com/" },
  "Git": { slug: "git", url: "https://git-scm.com/" },
  "Docker": { slug: "docker", url: "https://www.docker.com/" },
  "FastAPI": { slug: "fastapi", url: "https://fastapi.tiangolo.com/" },
  "Flask": { slug: "flask", url: "https://flask.palletsprojects.com/" },
  "VS Code": { slug: "visualstudiocode", url: "https://code.visualstudio.com/" },
};

const SkillBadge = ({ skill }) => {
  const config = skillConfig[skill] || { slug: null, url: "#" };
  const hasUrl = config.url && config.url !== "#";

  const Content = () => (
    <>
      {config.slug ? (
        <img 
          src={`https://cdn.simpleicons.org/${config.slug}/white`} 
          alt={`${skill} logo`} 
          className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" 
        />
      ) : (
        <Code2 size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
      )}
      {skill}
    </>
  );

  const baseClasses = "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-xl transition-all group";

  if (hasUrl) {
    return (
      <a
        href={config.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} hover:bg-white/10 hover:border-white/20`}
      >
        <Content />
      </a>
    );
  }

  return (
    <div className={`${baseClasses} cursor-default`}>
      <Content />
    </div>
  );
};

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="skills">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Core Competencies
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-green-500 to-green-500 rounded-full" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Languages - span 1 col on md */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Web - span 2 cols on md */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:col-span-2 group relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500 pointer-events-none" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Code2 className="text-indigo-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Web Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
            {skills.web.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.databases.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Settings className="text-gray-300" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Core Concepts */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Core Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.coreConcepts.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
        
        {/* Learning */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.learning.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
        
        {/* Soft Skills - span 2 cols on md */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:col-span-2 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-orange-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.softSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { Database, Server, Settings, Code2, Terminal, BrainCircuit } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { PORTFOLIO_DATA } from "../constants";

const skillConfig = {
  "Java": { slug: "java", url: "https://www.java.com/" },
  "Python": { slug: "python", url: "https://www.python.org/" },
  "PHP": { slug: "php", url: "https://www.php.net/" },
  "JavaScript": { slug: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  "SQL": { slug: "mysql", url: "https://en.wikipedia.org/wiki/SQL" },
  "HTML/CSS": { slug: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  "Spring Boot": { slug: "springboot", url: "https://spring.io/projects/spring-boot" },
  "Django": { slug: "django", url: "https://www.djangoproject.com/" },
  "Flask": { slug: "flask", url: "https://flask.palletsprojects.com/" },
  "React": { slug: "react", url: "https://react.dev/" },
  "Tailwind CSS": { slug: "tailwindcss", url: "https://tailwindcss.com/" },
  "Framer Motion": { slug: "framer", url: "https://www.framer.com/motion/" },
  "Vite": { slug: "vite", url: "https://vitejs.dev/" },
  "MySQL": { slug: "mysql", url: "https://www.mysql.com/" },
  "PostgreSQL": { slug: "postgresql", url: "https://www.postgresql.org/" },
  "MongoDB": { slug: "mongodb", url: "https://www.mongodb.com/" },
  "TensorFlow": { slug: "tensorflow", url: "https://www.tensorflow.org/" },
  "PyTorch": { slug: "pytorch", url: "https://pytorch.org/" },
  "Scikit-Learn": { slug: "scikitlearn", url: "https://scikit-learn.org/" },
  "Pandas": { slug: "pandas", url: "https://pandas.pydata.org/" },
  "Git": { slug: "git", url: "https://git-scm.com/" },
  "Postman": { slug: "postman", url: "https://www.postman.com/" },
  "Docker": { slug: "docker", url: "https://www.docker.com/" },
  "Linux": { slug: "linux", url: "https://www.kernel.org/" },
};

const SkillBadge = ({ skill }) => {
  const config = skillConfig[skill] || { slug: null, url: "#" };

  return (
    <a
      href={config.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
    >
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
    </a>
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
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Languages - span 2 cols on md */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:col-span-2 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-purple-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">Database</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.database.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Backend - span 2 cols on md */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:col-span-2 group relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Server className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Backend Architecture</h3>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
            {skills.backend.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Frontend - span 1 col */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-indigo-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* AI & Machine Learning - span 2 cols */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:col-span-2 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="text-pink-400" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">AI & Machine Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.machineLearning.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools - span 1 col */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <Settings className="text-gray-300" size={24} />
            <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">Dev Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;

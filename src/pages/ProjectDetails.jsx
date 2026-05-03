import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { PORTFOLIO_DATA } from "../constants";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Project not found</h2>
        <Link to="/" className="ml-4 text-blue-500 hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="relative z-10 pb-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-32">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all"
            >
              <GithubIcon size={20} />
              View Source
            </a>
          </div>

          <div className="glass-card p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">About the Project</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {project.extendedDescription}
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;

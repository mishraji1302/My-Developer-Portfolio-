import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";
import { PORTFOLIO_DATA } from "../constants";

const FeaturedWork = () => {
  return (
    <SectionWrapper id="work">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <Link
            to={`/project/${project.id}`}
            key={index}
            className="group relative flex flex-col justify-between p-8 glass-card hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500" />
            
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 relative"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 relative"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedWork;

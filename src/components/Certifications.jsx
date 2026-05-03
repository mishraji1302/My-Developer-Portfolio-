import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { PORTFOLIO_DATA } from "../constants";

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative flex flex-col p-8 glass-card hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="mt-auto pt-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                </div>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;

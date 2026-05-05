import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, BrandLogo } from "./Icons";
import { PORTFOLIO_DATA } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/5 py-12 mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 bg-green-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="flex flex-col md:flex-row items-center gap-3 group mb-4">
            <BrandLogo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-400 transition-all duration-300">
              Arnav Mishra
            </span>
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.contact.email}
            className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

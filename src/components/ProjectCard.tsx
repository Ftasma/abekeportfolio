"use client";

import { motion } from "framer-motion";
import { Folder, FileText, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    overview: string;
    skills: string[];
    deliverables: string[];
    folderLink: string;
    reportLink: string;
    focusArea: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-rose-600/50 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-rose-900/20"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-rose-600/10 blur-3xl transition-opacity group-hover:bg-rose-600/20" />
      
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-500/20">
            {project.focusArea}
          </span>
          <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-400" />
        </div>

        <h3 className="mb-3 text-2xl font-light text-zinc-100">{project.title}</h3>
        <p className="mb-6 text-sm text-zinc-400 leading-relaxed">
          {project.overview}
        </p>

        <div className="mb-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Core Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-zinc-700/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Deliverables
          </h4>
          <ul className="space-y-2">
            {project.deliverables.map((item) => (
              <li key={item} className="flex items-start text-sm text-zinc-300">
                <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-zinc-800/50 flex flex-wrap gap-4">
        <a
          href={project.folderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-rose-400"
        >
          <Folder className="h-4 w-4" />
          Project Folder
        </a>
        <a
          href={project.reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-rose-400"
        >
          <FileText className="h-4 w-4" />
          View Report
        </a>
      </div>
    </motion.div>
  );
}

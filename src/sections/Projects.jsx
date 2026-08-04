import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          route="/projects"
          title="Featured Projects"
          subtitle="A selection of applications I've designed and built, from AI-powered platforms to backend services."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import portfolioSettings from "../data/portfolio-settings.json";
import { carrent, jobit, tripguide } from "../assets";

const projectImages = {
  carrent,
  jobit,
  tripguide,
};

const formatTags = (tags = []) =>
  tags.map((tag, index) => ({
    name: tag,
    color: ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"][index % 3],
  }));

export const configuredProjects = (portfolioSettings.projects || []).map((project) => ({
  name: project.name,
  description: project.description,
  tags: formatTags(project.tags),
  image: projectImages[project.imageKey] || carrent,
  source_code_link: project.sourceCodeUrl || "",
  live_demo_link: project.liveDemoUrl || "",
}));

export const configuredTestimonials = portfolioSettings.testimonials || [];

export default portfolioSettings;

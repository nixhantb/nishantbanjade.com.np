import {
  HelpUser,
  WhoamI,
  EducationQualifications,
  Skills,
  Publications,
  Github,
  Linkedin,
  Blog
} from "./commands/HelpUser";

export const commands: Record<string, string | string[]> = {
  // Information about the user
  whoami: WhoamI.map(
    (item) => `${item.name} ${item.Profession} ${item.company}`
  ).join("<br/>"),
  // Education Qualifications
  education: EducationQualifications.map(
    (item) => `Course: ${item.title} College: ${item.desc}  CGPA: ${item.CGPA}`
  ).join("<br />"),

  clear: [],
  help: HelpUser.map(
    (item) => `${item.whoami} ${item.education} ${item.skills} ${item.publications} ${item.blogs} ${item.github} ${item.LinkedIn} ${item.clear}`
  ).join("<br/>"),

  skills: Skills.map(
    (
      item
    ) => `${item.frontend} ${item.backend} ${item.database} ${item.programming_languages} ${item.unit_testing}
    ${item.version_control} ${item.Agile_tool} ${item.Tools}`
  ),

  publications: Publications.map((item) => `${item.image_caption}`),

  blogs: Blog.map((item) => `${item.blog_articles}`),

  github: Github.map((item) => `${item.gh_handle}`),

  linkedin: Linkedin.map((item) => `${item.linkedin}`)
};

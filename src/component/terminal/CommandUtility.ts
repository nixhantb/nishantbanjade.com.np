import {
  HelpUser,
  WhoamI,
  EducationQualifications,
  Skills,
  Publications,
  Github,
  Linkedin,
  Blog,
  Contact
} from "./commands/HelpUser";

export const commands: Record<string, string | string[]> = {
  // Information about the user
  whoami: WhoamI.map(
    (item) =>
      `${item.name} <br/> ${item.profession} <br/> ${item.company}`
  ),
  // Education Qualifications
  education: EducationQualifications.map(
    (item) =>
      `Course: ${item.title}<br/>College: ${item.desc}<br/> CGPA: ${item.CGPA}`
  ),

  clear: [],
  help: HelpUser.map(
    (item) =>
      `${item.whoami} <br/> ${item.education} <br/> ${item.skills} <br/> ${item.publications} <br/> ${item.blogs} <br/> ${item.github} <br/> ${item.LinkedIn} <br/> ${item.Contact} <br/> ${item.clear}`
  ).join("<br/>"),

  skills: Skills.map(
    (item) =>
      `${item.frontend} <br/> ${item.backend} <br/> ${item.database} <br/> ${item.programming_languages} <br/> ${item.unit_testing}
    <br/> ${item.version_control} <br/> ${item.Agile_tool} <br/> ${item.Tools}`
  ),

  publications: Publications.map(
    (item) =>
      `${item.image_caption}<br/> <a href="${item.url}" target="_blank">Paper Link</a>`
  ),

  blogs: Blog.map(
    (item) =>
      `${item.blog_articles}<br/><a href = "${item.blog_url}" target = "_blank">${item.blog_url}</a>`
  ),

  github: Github.map(
    (item) =>
      `<a href="${item.gh_handle}" target="_blank">${item.gh_handle}</a>`
  ),

  linkedin: Linkedin.map(
    (item) =>
      `<a href="${item.linkedin}" target="_blank">${item.linkedin}</a>`
  ),
  contact: Contact.map(
    (item) => `Email Me -> ${item.email}`
  ),
};

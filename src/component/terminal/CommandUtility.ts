import { EducationQualifications } from "./commands/Education";
import { HelpUser } from "./commands/HelpUser";
import { Skills } from "./commands/Skills";
import { WhoamI } from "./commands/whoami";

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
    (item) => `${item.whoami} ${item.education} ${item.skills} ${item.clear}`
  ).join("<br/>"),

  skills: Skills.map(
    (
      item
    ) => `${item.frontend} ${item.backend} ${item.database} ${item.programming_languages} ${item.unit_testing}
    ${item.version_control} ${item.Agile_tool} ${item.Tools}`
  ),
};

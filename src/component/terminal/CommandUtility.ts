import { EducationQualifications } from "./commands/Education";
import { WhoamI } from "./commands/whoami";
export const commands: Record<string, string | string[]> = {
  // Information about the user
  whoami: WhoamI.map(
    (item) =>
      `${item.name} ${item.Profession} ${item.company}`
  ).join("<br/>"),
  // Education Qualifications
  education: EducationQualifications.map(
    (item) => `Course: ${item.title} College: ${item.desc}  CGPA: ${item.CGPA}`
  ).join("<br />"),

  clear: [],
};

const TerminalConfiguration = {
  welcome_message: "Type 'help' to get started",
  terminal_username: "[Nix-term~ ]",
  // Please add <br/> at the end of your command to get response in the next line
  whoami: {
    name: "Nishant Banjade <br/>",
    Profession: "Software Engineer I <br/>",
    company: "Ellucian | Bangalore",
  },
  education: {
    title: "CSE(hons.) Data Science <br/>",
    desc: "Jain (Deemed-to-be) University | 2019 - 2023 <br/>",
    CGPA: "8.4 / 10",
  },
  help: {
    whoami: "whoami -> My general information<br/>",
    education: "education -> My educational background<br/>",
    skills: "Skills -> My current SWE skills<br/>",
    clear: "clear -> clears every thing from the window",
  },
  skills: {
    frontend: "Frontend -> HTML, CSS, React, Material UI, Styled component<br/>",
    backend: "Backend -> .Net Framework, Rest architecture, RabbitMQ<br/>",
    database: "Database -> SQL, MongoDB(familiar)<br/>",
    programming_languages:
      "Programming Languages ->Java, C#, JavaScript, TypeScript, Python, C(familiar)<br/>",
    unit_testing: "Unit testing -> TypeMock, Jest<br/>",
    version_control: "Version control -> Git<br/>",
    Agile_tool: "Agile Tool -> JIRA(almost everyday)<br/>",
    Tools: "Tools I use -> Figma, Postman, visual studio 2022, VScode, vsVim"
  },

};

export default TerminalConfiguration;

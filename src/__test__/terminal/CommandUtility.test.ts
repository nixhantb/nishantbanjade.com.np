import { commands } from "../../component/terminal/CommandUtility";

describe("Should test the command utility", () => {
    
    test("should render the correct data type", () => {
        expect(commands.whoami).toBeDefined();
        expect(typeof commands.whoami).toBe("string");
    });

    test("should render the education", () => {
        expect(commands.education).toBeDefined();
        expect(typeof commands.education).toBe("string");
    });

    test("should display the whoami data in correct order including line break", () => {
      expect(commands.whoami).toContain('<br/>');
      expect(commands.whoami).toContain('Nishant Banjade');
      expect(commands.whoami).toContain('Software Engineer I');
      expect(commands.whoami).toContain('Ellucian | Bangalore');

    });

    test("should display the education data in correct order including line break", () => {
        expect(commands.education).toContain('<br/>');
        expect(commands.education).toContain('CSE(hons.) Data Science');
        expect(commands.education).toContain('Jain (Deemed-to-be) University | 2019 - 2023');
        expect(commands.education).toContain('8.4 / 10');
    });

    test("should clear everything from terminal screen", () => {
        expect(commands.clear).toEqual([]);
    });
});
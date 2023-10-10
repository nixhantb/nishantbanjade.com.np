import { commands } from "../../component/terminal/CommandUtility";

describe("Should test the command utility", () => {
    
    test("should render the correct data type", () => {
        expect(commands.whoami).toBeDefined();
        expect(typeof commands.whoami).toBe("object");
    });

    test("should render the education", () => {
        expect(commands.education).toBeDefined();
        expect(typeof commands.education).toBe("object");
    });

    test("should display the whoami data in correct order including line break", () => {
      expect(commands.whoami).toContain('Nishant Banjade <br/> Software Engineer I <br/> Ellucian | Bangalore');
    });
    test("should clear everything from terminal screen", () => {
        expect(commands.clear).toEqual([]);
    });
});
// unit test for theme.ts
import baseTheme from "../../../assets/styles/basetheme/theme";
import { Colors } from "../../../assets/styles/basetheme/theme";

describe("baseTheme", () => {
  it("should create a valid Material-UI theme object", () => {
    // Ensure baseTheme is an object
    expect(typeof baseTheme).toBe("object");

    // Ensure baseTheme.palette is an object
    expect(typeof baseTheme.palette).toBe("object");

    // Test the primary color
    expect(baseTheme.palette.primary.main).toBe(Colors.textShaft);

    // Test the secondary color
    expect(baseTheme.palette.secondary.main).toBe(Colors.accentOrange);

    // Test the background colors
    expect(baseTheme.palette.background.default).toBe(
      Colors.backgroundLightGray
    );
    expect(baseTheme.palette.background.paper).toBe(
      Colors.backgroundLightBlack
    );

    // Test the text colors
    expect(baseTheme.palette.text.primary).toBe(Colors.textBlack);
    expect(baseTheme.palette.text.secondary).toBe(Colors.textShaft);
  });

    it("should have defined colors in the Colors object", () => {
       // Ensuring the Colors object has defined colors
       expect(Object.keys(Colors)).toEqual([
        "primary",
        "backgroundLightGray",
        "backgroundLightBlack",
        "accentOrange",
        "backgroundDarkGray",
        "textShaft",
        "textBlack",
        "plumPlate",
        "cloudyKnoxville",
        "premiumDark",
        "royal",
        "terminal",
        "almost",
        "textGray",
       ]);
    });

    // undefined checks
    it("should not be undefined or null", () => {
        // making sure baseTheme is not undefined or null
        expect(baseTheme).not.toBeNull();
        expect(baseTheme).not.toBeUndefined();
    });

    it("should not contain unexpected properties", () => {
        // Get all property names in the baseTheme object
        const themeProperties = Object.keys(baseTheme);
      
        // Define unexpected properties
        const unexpectedProperties = ["#abcdefg", "#23223"];
      
        // Check if any unexpected properties are present in the themeProperties array
        const unexpectedPropertyPresent = unexpectedProperties.some((property) =>
          themeProperties.includes(property)
        );
      
        // Expect that no unexpected properties are present
        expect(unexpectedPropertyPresent).toBe(false);
      });
      

});

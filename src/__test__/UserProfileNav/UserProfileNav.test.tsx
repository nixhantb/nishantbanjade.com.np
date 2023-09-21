import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UserProfileNav from "../../component/UserProfileNav/UserProfileNav";
// Create a custom theme to provide to the component
const theme = createTheme();
describe("UserProfileNav component to test the Mobile and Desktop View", () => {
  test("Renders UserProfileNavMobileView on small screens", () => {
    // Mock useMediaQuery to simulate a small screen
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    });

    render(
      <ThemeProvider theme={theme}>
        <UserProfileNav />
      </ThemeProvider>
    );

    // Check that UserProfileNavMobileView is rendered on small screens
    expect(screen.getByRole("button", { name: "menu-icon" })).not.toBeNull();

    // Ensure UserProfileNavDesktopView is not present
    expect(screen.queryByText("UserProfileNavDesktopView")).toBeNull();
  });

  // Large screens
  test("Renders UserProfileNavMobileView with large screens", () => {
    // Mock useMediaQuery to simulate a small screen
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    });

    render(
      <ThemeProvider theme={theme}>
        <UserProfileNav />
      </ThemeProvider>
    );

    expect(screen.queryByText("UserProfileNavMobileView")).toBeNull();
  });
});

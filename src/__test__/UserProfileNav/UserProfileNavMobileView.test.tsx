import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileNavMobileView from "../../component/UserProfileNav/UserProfileNavMobileView";
import UserInformationDataForNavBar from "../../assets/config/developer_data/customizedev";

describe("UserProfileNavMobileView Component", () => {
  test("developer_username should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavMobileView />);
    const { developer_username } = UserInformationDataForNavBar;
    const developerUsernameElement = queryByText(developer_username);
    expect(developerUsernameElement).not.toBeNull();
  });

  test("Should correctly render the Menu Icon in the Mobile View", () => {
    render(<UserProfileNavMobileView />);
    const menuIcon = screen.getByLabelText("menu-icon");
    expect(menuIcon).not.toBeNull();
  });

  test("Should correctly render the Terminal Icon in the Mobile View", () => {
    render(<UserProfileNavMobileView />);
    const terminalIcon = screen.getByLabelText("terminal-icon");
    expect(terminalIcon).not.toBeNull();
  });

  test("Toggle menu should open and close the menu", () => {
    const { getByLabelText, queryByLabelText } = render(
      <UserProfileNavMobileView />
    );

    // check if the menu is initially closed
    expect(queryByLabelText("close-menu-icon")).toBeNull();
    // click on the menu icon to open the menu
    fireEvent.click(getByLabelText("menu-icon"));
    // close menu is visible
    expect(queryByLabelText("close-menu-icon")).not.toBeNull();
    // click close icon
    fireEvent.click(getByLabelText("close-menu-icon"));
    // menu icon is visible
    expect(queryByLabelText("menu-icon")).not.toBeNull();
  });
});

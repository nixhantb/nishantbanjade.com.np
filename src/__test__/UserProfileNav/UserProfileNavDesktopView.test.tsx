import { render } from "@testing-library/react";
import UserProfileNavDesktopView from "../../component/UserProfileNav/UserProfileNavDesktopView";
import UserInformationDataForNavBar from "../../assets/config/developer_data/customizedev";

describe("UserProfileNavDesktopView Component", () => {
  test("developer_username should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavDesktopView />);
    const { developer_username } = UserInformationDataForNavBar;
    const developerUsernameElement = queryByText(developer_username);
    expect(developerUsernameElement).not.toBeNull();
  });

  test("navbar home should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavDesktopView />);
    const { navbar_home } = UserInformationDataForNavBar;
    const developerHomeElement = queryByText(navbar_home);
    expect(developerHomeElement).not.toBeNull();
  });

  test("navbar about should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavDesktopView />);
    const { navbar_about } = UserInformationDataForNavBar;
    const developerAboutElement = queryByText(navbar_about);
    expect(developerAboutElement).not.toBeNull();
  });
  test("navbar contact should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavDesktopView />);
    const { navbar_contact } = UserInformationDataForNavBar;
    const developerContactElement = queryByText(navbar_contact);
    expect(developerContactElement).not.toBeNull();
  });
  test("navbar about should have the correct value", () => {
    const { queryByText } = render(<UserProfileNavDesktopView />);
    const { navbar_terminal } = UserInformationDataForNavBar;
    const developerTerminalElement = queryByText(navbar_terminal);
    expect(developerTerminalElement).not.toBeNull();
  });
});

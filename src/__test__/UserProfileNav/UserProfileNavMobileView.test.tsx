import { render , screen} from "@testing-library/react";
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

        render(<UserProfileNavMobileView/>);
        const menuIcon = screen.getByLabelText("menu-icon");
        expect(menuIcon).not.toBeNull();
        
    });

    test("Should correctly render the Terminal Icon in the Mobile View", () => {

        render(<UserProfileNavMobileView/>);
        const terminalIcon = screen.getByLabelText("terminal-icon");
        expect(terminalIcon).not.toBeNull();
        
    })
})
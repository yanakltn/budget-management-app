// mui components
import { BottomNavigationAction, Stack } from "@mui/material";
// assets
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExpensesIcon } from "../../assets/expenses-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings-icon.svg";
// react-router
import { useLocation, useNavigate } from "react-router-dom";
// icons
import AddIcon from "@mui/icons-material/Add";
// styles
import {
  AddButton,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
} from "./styles";

const BottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newRoute: string) => {
    navigate(newRoute);
  };
  return (
    <StyledBottomNavigation value={pathname} onChange={handleChange}>
      <StyledBottomNavigationAction value="/" icon={<HomeIcon />} />
      <StyledBottomNavigationAction value="/expenses" icon={<ExpensesIcon />} />
      <Stack minWidth={80} alignItems="center">
        <AddButton variant="contained">
          <AddIcon />
        </AddButton>
      </Stack>
      <BottomNavigationAction value="/" icon={<CalendarIcon />} />
      <BottomNavigationAction value="/" icon={<SettingsIcon />} />
    </StyledBottomNavigation>
  );
};
export default BottomNav;

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExpensesIcon } from "../../assets/expenses-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  "&.Mui-selected": {
    svg: {
      fill: "#FF643B",
      stroke: "#FF643B",
    },
  },
});

const BottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newRoute: string) => {
    navigate(newRoute);
  };
  return (
    <BottomNavigation
      value={pathname}
      onChange={handleChange}
      sx={{
        background: "#FFF",
        borderTop: "1px solid rgba(0, 0, 0, 0.09)",
        padding: "20px 27px",
        height: "90px",
        position: "sticky",
        bottom: "0",
      }}
    >
      <StyledBottomNavigationAction value="/" icon={<HomeIcon />} />
      <StyledBottomNavigationAction value="/expenses" icon={<ExpensesIcon />} />
      <Stack minWidth={80} alignItems="center">
        <Button
          variant="contained"
          sx={{
            borderRadius: "100%",
            width: "49px",
            height: "49px",
            minWidth: "49px",
            background: "#FF643B",
            "&:hover": {
              background: "#FF643B",
            },
          }}
        >
          <AddIcon />
        </Button>
      </Stack>
      <BottomNavigationAction value="/" icon={<CalendarIcon />} />
      <BottomNavigationAction value="/" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};
export default BottomNav;

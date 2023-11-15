import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  styled,
} from "@mui/material";

export const StyledBottomNavigation = styled(BottomNavigation)({
  background: "#FFF",
  borderTop: "1px solid rgba(0, 0, 0, 0.09)",
  padding: "20px 27px",
  height: "90px",
  position: "sticky",
  bottom: "0",
});

export const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  "&.Mui-selected": {
    svg: {
      fill: "#FF643B",
      stroke: "#FF643B",
    },
  },
});

export const AddButton = styled(Button)({
  borderRadius: "100%",
  width: "49px",
  height: "49px",
  minWidth: "49px",
  background: "#FF643B",
  "&:hover": {
    background: "#FF643B",
  },
});

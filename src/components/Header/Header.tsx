import { Box, Stack, Typography } from "@mui/material";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification-icon.svg";
import { SectionTitleTypography } from "../commonStyles";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: "39px" }}
    >
      <UserIcon />
      <SectionTitleTypography>{title}</SectionTitleTypography>
      <NotificationIcon />
    </Stack>
  );
};
export default Header;

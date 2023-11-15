// assets
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification-icon.svg";
// styles
import { SectionTitleTypography } from "../commonStyles";
import { HeaderStack } from "./styles";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderStack direction="row">
      <UserIcon />
      <SectionTitleTypography>{title}</SectionTitleTypography>
      <NotificationIcon />
    </HeaderStack>
  );
};
export default Header;

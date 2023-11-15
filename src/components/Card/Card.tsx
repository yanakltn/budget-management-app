// mui components
import { Box, Stack } from "@mui/material";
//assets
import { ReactComponent as MasterCardIcon } from "../../assets/master-card.svg";
// styles
import {
  BalanceTypography,
  CardContainer,
  CardNumberTypography,
  CardTitleTypography,
  StyledCardBox,
  StyledMoreHorizIcon,
} from "./styles";

const Card = () => {
  return (
    <Stack direction="column" alignItems="center" marginBottom="36px">
      <CardContainer />
      <StyledCardBox>
        <StyledMoreHorizIcon />
        <CardTitleTypography marginBottom="16px">
          Total Balance
        </CardTitleTypography>
        <BalanceTypography marginBottom="44px">$76,22.00</BalanceTypography>
        <Stack direction="row" spacing={"16px"}>
          <CardNumberTypography>2544</CardNumberTypography>
          <CardNumberTypography>7545</CardNumberTypography>
          <CardNumberTypography>3785</CardNumberTypography>
          <CardNumberTypography>1023</CardNumberTypography>
        </Stack>
        <Box top="135px" right="30px" position="absolute">
          <MasterCardIcon />
        </Box>
      </StyledCardBox>
    </Stack>
  );
};

export default Card;

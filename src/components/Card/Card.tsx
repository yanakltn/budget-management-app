import { Box, Stack } from "@mui/material";
import { ReactComponent as MasterCardIcon } from "../../assets/master-card.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  BalanceTypography,
  CardNumberTypography,
  CardTitleTypography,
} from "./styles";

const Card = () => {
  return (
    <Stack direction="column" alignItems="center" marginBottom="36px">
      <Box
        width={285}
        height={34}
        bgcolor={"#9A63FB"}
        borderRadius={"24px 24px 0 0"}
      />
      <Box
        width="100%"
        height={187}
        bgcolor={"#2F3046"}
        borderRadius={"24px"}
        padding={"23px 30px"}
        position="relative"
      >
        <MoreHorizIcon
          sx={{
            position: "absolute",
            top: "9px",
            right: "27px",
            color: "#FAFAFA",
          }}
        />
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
      </Box>
    </Stack>
  );
};

export default Card;

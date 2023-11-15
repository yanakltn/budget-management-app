import { Box, Stack, Typography, styled } from "@mui/material";
import { AccountValues } from "./AccountInfo";
import { BalanceTypography, CardTitleTypography } from "../Card/styles";
import { ReactComponent as ExpensesIcon } from "../../assets/expenses-icon.svg";

type AccountProps = {
  account: AccountValues;
};

export const AccountTitleTypography = styled(Typography)({
  color: "#000",
  fontFamily: "Roboto",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const AccountNumberTypography = styled(Typography)({
  color: "#A3A3A3",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
});

const Account = ({ account }: AccountProps) => {
  return (
    <Box
      borderRadius={"6px 6px 0 0"}
      bgcolor={account.mainColor}
      width="100%"
      position="relative"
      marginBottom="32px"
    >
      <Box padding={"23px 23px 27px"}>
        <CardTitleTypography marginBottom="16px">
          Total Balance
        </CardTitleTypography>
        <BalanceTypography>${account.totalBalance}</BalanceTypography>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        borderRadius="10px 10px 0px 0px"
        bgcolor="#FAFAFA"
        padding="12px 21px"
        width="100%"
        alignItems="center"
      >
        <ExpensesIcon width="33px" height="26px" fill={account.cardColor} />
        <Stack direction="column">
          <AccountTitleTypography>{account.title}</AccountTitleTypography>
          <AccountNumberTypography>
            {account.cardNumber}
          </AccountNumberTypography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Account;

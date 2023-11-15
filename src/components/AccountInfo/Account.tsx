// mui components
import { Box, Stack } from "@mui/material";
// styles
import { BalanceTypography, CardTitleTypography } from "../Card/styles";
import {
  AccountNumberTypography,
  AccountTitleTypography,
  ExpensesBankInfo,
  ExpensesContainer,
} from "./styles";
//assets
import { ReactComponent as ExpensesIcon } from "../../assets/expenses-icon.svg";
// types
import { AccountValues } from "./types";

type AccountProps = {
  account: AccountValues;
};

const Account = ({ account }: AccountProps) => {
  return (
    <ExpensesContainer bgcolor={account.mainColor}>
      <Box padding={"23px 23px 27px"}>
        <CardTitleTypography marginBottom="16px">
          Total Balance
        </CardTitleTypography>
        <BalanceTypography>${account.totalBalance}</BalanceTypography>
      </Box>
      <ExpensesBankInfo direction="row">
        <ExpensesIcon width="33px" height="26px" fill={account.cardColor} />
        <Stack direction="column">
          <AccountTitleTypography>{account.title}</AccountTitleTypography>
          <AccountNumberTypography>
            {account.cardNumber}
          </AccountNumberTypography>
        </Stack>
      </ExpensesBankInfo>
    </ExpensesContainer>
  );
};

export default Account;

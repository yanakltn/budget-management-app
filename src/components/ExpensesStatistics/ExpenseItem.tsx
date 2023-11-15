//mui components
import { Stack } from "@mui/material";
// types
import { Expense } from "./types";
// styles
import { ExpensePercentage, ExpenseTypography } from "./styles";
import {
  TransactionAmount,
  TransactionDescription,
  TransactionTitle,
} from "../commonStyles";

type ExpenseItemProps = {
  item: Expense;
};

const ExpenseItem = ({ item }: ExpenseItemProps) => {
  return (
    <Stack direction="column">
      <Stack direction="row" gap="16px" marginBottom="24px">
        {item.icon}
        <Stack direction="column" width="100%">
          <Stack direction="row" justifyContent="space-between">
            <TransactionTitle>{item.name}</TransactionTitle>
            <TransactionDescription>
              {item.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </TransactionDescription>
          </Stack>
          <Stack direction="row">
            <TransactionDescription>{item.from}</TransactionDescription>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap="24px" marginBottom="16px">
        <ExpenseTypography>Total Spend</ExpenseTypography>
        <ExpenseTypography>Total Budget</ExpenseTypography>
      </Stack>
      <Stack direction="row" marginBottom="16px">
        <Stack direction="row" gap="60px">
          <TransactionAmount color="#2BB272">
            ${item.totalSpend}
          </TransactionAmount>
          <TransactionAmount color="#000">
            ${item.totalBudget}
          </TransactionAmount>
        </Stack>
        <TransactionAmount marginLeft="auto" color="#2BB272">
          {Math.floor((item.totalSpend / item.totalBudget) * 100)}%
        </TransactionAmount>
      </Stack>
      <ExpensePercentage
        width={Math.floor((332 * item.totalSpend) / item.totalBudget)}
      ></ExpensePercentage>
    </Stack>
  );
};

export default ExpenseItem;

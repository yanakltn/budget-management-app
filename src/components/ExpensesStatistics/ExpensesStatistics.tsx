import { Box, Stack, Typography, styled } from "@mui/material";
import { SectionTitleTypography } from "../commonStyles";
import {
  TransactionAmount,
  TransactionDescription,
  TransactionTitle,
  ViewAllTypography,
} from "../Transactions/Transactions";
import { ReactElement, useMemo } from "react";
import { ReactComponent as NikeIcon } from "../../assets/nike-icon.svg";
import { ExpensesList } from "./types";

type ExpensesStatisticsProps = {
  selectedDate: Date;
};

export const ExpenseTypography = styled(Typography)({
  color: "#615C5C",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
const ExpensesStatistics = ({ selectedDate }: ExpensesStatisticsProps) => {
  const currentExpenses = useMemo(
    () => ExpensesList.filter((cur) => +cur.date === +selectedDate),
    [selectedDate]
  );

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        marginBottom="24px"
        alignItems="center"
      >
        <SectionTitleTypography>Expenses</SectionTitleTypography>
        <ViewAllTypography>View all</ViewAllTypography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          borderRadius: "21px",
          background: "#FAFAFA",
          padding: "20px 14px",
        }}
      >
        {currentExpenses.map((item, index) => (
          <Stack direction="column" key={index}>
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
            <Box
              width={Math.floor((332 * item.totalSpend) / item.totalBudget)}
              height="13px"
              bgcolor="#8635F7"
              borderRadius="13px"
            ></Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ExpensesStatistics;

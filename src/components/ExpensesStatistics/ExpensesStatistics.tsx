// mui components
import { Box } from "@mui/material";
//styles
import { SectionTitleTypography, ViewAllTypography } from "../commonStyles";
import { ExpensesContainer, ExpensesItems } from "./styles";
// hooks
import { useMemo } from "react";
// types
import { ExpensesList } from "./types";
// component
import ExpenseItem from "./ExpenseItem";

type ExpensesStatisticsProps = {
  selectedDate: Date;
};

const ExpensesStatistics = ({ selectedDate }: ExpensesStatisticsProps) => {
  const currentExpenses = useMemo(
    () => ExpensesList.filter((cur) => +cur.date === +selectedDate),
    [selectedDate]
  );

  return (
    <Box>
      <ExpensesContainer direction="row">
        <SectionTitleTypography>Expenses</SectionTitleTypography>
        <ViewAllTypography>View all</ViewAllTypography>
      </ExpensesContainer>
      <ExpensesItems direction="column">
        {currentExpenses.map((item, index) => (
          <ExpenseItem item={item} key={index} />
        ))}
      </ExpensesItems>
    </Box>
  );
};

export default ExpensesStatistics;

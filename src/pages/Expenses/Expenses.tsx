// mui components
import { Container } from "@mui/material";
// components
import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import ExpensesStatistics from "../../components/ExpensesStatistics/ExpensesStatistics";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import CalendarView from "../../components/CalendarView/CalendarView";
// hooks
import { useCallback, useState } from "react";
// types
import { ExpensesList } from "../../components/ExpensesStatistics/types";

const Expenses = () => {
  const [startOfTheWeek, setStartOfTheWeek] = useState(new Date(2022, 3, 20));
  const [selectedDate, setSelectedDate] = useState(new Date(2022, 3, 24));

  const handlePreviousWeek = useCallback(() => {
    setStartOfTheWeek(
      (startOfTheWeek) => new Date(+startOfTheWeek - 7 * 24 * 60 * 60 * 1000)
    );
  }, [setStartOfTheWeek]);

  const handleNextWeek = useCallback(() => {
    setStartOfTheWeek(
      (startOfTheWeek) => new Date(+startOfTheWeek + 7 * 24 * 60 * 60 * 1000)
    );
  }, [setStartOfTheWeek]);

  return (
    <Container maxWidth="xs" sx={{ padding: "27px 0px" }}>
      <Header title="Expenses" />
      <CalendarView
        selectedDate={selectedDate}
        handleSelectDate={setSelectedDate}
        handlePreviousWeek={handlePreviousWeek}
        handleNextWeek={handleNextWeek}
        startOfTheWeek={startOfTheWeek}
        expenses={ExpensesList}
      />
      <AccountInfo />
      <ExpensesStatistics selectedDate={selectedDate} />
      <BottomNav />
    </Container>
  );
};

export default Expenses;

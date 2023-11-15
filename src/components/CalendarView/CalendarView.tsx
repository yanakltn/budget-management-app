//mui icons
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// mui components
import { Stack } from "@mui/material";
// hooks
import { useMemo } from "react";
// types
import { Expense } from "../ExpensesStatistics/types";
import { CalendarDate, WeekDay } from "./types";
// styles
import {
  ActiveDayBox,
  CalendarViewContainer,
  DayDot,
  StyledTypography,
} from "./styles";

type CalendarViewProps = {
  selectedDate: Date;
  handleSelectDate: (date: Date) => void;
  startOfTheWeek: Date;
  handlePreviousWeek: () => void;
  handleNextWeek: () => void;
  expenses: Expense[];
};

const CalendarView = ({
  selectedDate,
  handleSelectDate,
  startOfTheWeek,
  handlePreviousWeek,
  handleNextWeek,
  expenses,
}: CalendarViewProps) => {
  const data: CalendarDate[] = useMemo(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const createCalendarDate = (weekDay: WeekDay, date: Date) => {
      return {
        weekDay: weekDay,
        date: date,
        hasExpenses: !!expenses.find((cur) => +cur.date === +date),
      };
    };

    return [
      createCalendarDate(WeekDay.Monday, new Date(+startOfTheWeek)),
      createCalendarDate(WeekDay.Tuesday, new Date(+startOfTheWeek + oneDay)),
      createCalendarDate(
        WeekDay.Wednesday,
        new Date(+startOfTheWeek + 2 * oneDay)
      ),
      createCalendarDate(
        WeekDay.Thursday,
        new Date(+startOfTheWeek + 3 * oneDay)
      ),
      createCalendarDate(
        WeekDay.Friday,
        new Date(+startOfTheWeek + 4 * oneDay)
      ),
      createCalendarDate(
        WeekDay.Saturday,
        new Date(+startOfTheWeek + 5 * oneDay)
      ),
      createCalendarDate(
        WeekDay.Sunday,
        new Date(+startOfTheWeek + 6 * oneDay)
      ),
    ];
  }, [startOfTheWeek, expenses]);

  return (
    <CalendarViewContainer>
      <Stack mb={"16px"} direction={"row"} justifyContent={"space-between"}>
        <ChevronLeft onClick={handlePreviousWeek} sx={{ cursor: "pointer" }} />
        <StyledTypography fontWeight={500}>
          {startOfTheWeek.toLocaleDateString("en-US", { month: "long" })}{" "}
          {startOfTheWeek.getFullYear()}
        </StyledTypography>
        <ChevronRight onClick={handleNextWeek} sx={{ cursor: "pointer" }} />
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {data.map((cur) => (
          <Stack direction={"column"} key={+cur.date}>
            <StyledTypography
              fontWeight={+cur.date === +selectedDate ? 700 : 400}
              color="#615C5C"
              align="center"
              mb="14px"
            >
              {cur.weekDay}
            </StyledTypography>
            <ActiveDayBox
              bgcolor={+cur.date === +selectedDate ? "#FF643B" : undefined}
              onClick={() => cur.hasExpenses && handleSelectDate(cur.date)}
            >
              <StyledTypography
                align="center"
                mb={"11px"}
                color={+cur.date === +selectedDate ? "#FFF" : "#615C5C"}
                fontWeight={+cur.date === +selectedDate ? 800 : 400}
              >
                {cur.date.getDate()}
              </StyledTypography>
              <DayDot
                bgcolor={+cur.date === +selectedDate ? "#FFF" : "#A3A3A3"}
                visibility={cur.hasExpenses ? "visible" : "hidden"}
              />
            </ActiveDayBox>
          </Stack>
        ))}
      </Stack>
    </CalendarViewContainer>
  );
};

export default CalendarView;

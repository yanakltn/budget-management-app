import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Stack, Typography, styled } from "@mui/material";
import { useMemo } from "react";
import { Expense } from "../ExpensesStatistics/types";

enum WeekDay {
  Monday = "M",
  Tuesday = "T",
  Wednesday = "W",
  Thursday = "T",
  Friday = "F",
  Saturday = "S",
  Sunday = "S",
}

type CalendarDate = {
  weekDay: WeekDay;
  date: Date;
  hasExpenses: boolean;
};

const StyledTypography = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "normal",
});

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
    <Box
      padding={"20px 14px"}
      borderRadius={"21px"}
      bgcolor={"#FAFAFA"}
      mb={"32px"}
    >
      <Stack mb={"16px"} direction={"row"} justifyContent={"space-between"}>
        <ChevronLeft onClick={handlePreviousWeek} sx={{ cursor: "pointer" }} />
        <Typography>
          {startOfTheWeek.toLocaleDateString("en-US", { month: "long" })}{" "}
          {startOfTheWeek.getFullYear()}
        </Typography>
        <ChevronRight onClick={handleNextWeek} sx={{ cursor: "pointer" }} />
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {data.map((cur) => (
          <Stack direction={"column"} key={cur.weekDay}>
            <Typography align="center" mb="14px">
              {cur.weekDay}
            </Typography>
            <Box
              borderRadius={"8px"}
              bgcolor={+cur.date === +selectedDate ? "#FF643B" : undefined}
              padding={"12px 10px 9px 10px"}
              onClick={() => cur.hasExpenses && handleSelectDate(cur.date)}
              sx={{
                cursor: "pointer",
              }}
            >
              <StyledTypography
                align="center"
                mb={"11px"}
                color={+cur.date === +selectedDate ? "#FFF" : "#615C5C"}
                fontWeight={+cur.date === +selectedDate ? 800 : 400}
              >
                {cur.date.getDate()}
              </StyledTypography>
              <Box
                width={"6px"}
                height={"6px"}
                bgcolor={+cur.date === +selectedDate ? "#FFF" : "#A3A3A3"}
                borderRadius={"100%"}
                margin={"auto"}
                visibility={cur.hasExpenses ? "visible" : "hidden"}
              />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default CalendarView;

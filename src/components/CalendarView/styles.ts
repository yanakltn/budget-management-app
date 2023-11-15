import { Box, Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "normal",
});
export const CalendarViewContainer = styled(Box)({
  padding: "20px 14px",
  borderRadius: "21px",
  backgroundColor: "#FAFAFA",
  marginBottom: "32px",
});
export const ActiveDayBox = styled(Box)({
  padding: "12px 10px 9px 10px",
  cursor: "pointer",
  borderRadius: "8px",
});

export const DayDot = styled(Box)({
  width: "6px",
  height: "6px",
  borderRadius: "100%",
  margin: "auto",
});

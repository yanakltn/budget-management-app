import { Box, Button, Typography, styled } from "@mui/material";

export const AnalyticsButton = styled(Button)({
  borderRadius: "12px",
  background: "#FF653A",
  boxShadow: "none",
  color: "#FFF",
  fontFamily: "Roboto",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  "&.MuiButtonBase-root:hover": {
    background: "#FF653A",
  },
});

export const MonthTypography = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const StyledBarExpenses = styled(Box)({
  borderRadius: "6px 6px 0px 0px",
  marginBottom: "16px",
  width: "31px",
});

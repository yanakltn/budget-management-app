import { Box, Stack, Typography, styled } from "@mui/material";

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

export const ExpensesBankInfo = styled(Stack)({
  justifyContent: "space-between",
  borderRadius: "10px 10px 0px 0px",
  backgroundColor: "#FAFAFA",
  padding: "12px 21px",
  width: "100%",
  alignItems: "center",
});

export const ExpensesContainer = styled(Box)({
  width: "100%",
  position: "relative",
  marginBottom: "32px",
  borderRadius: "6px 6px 0 0",
});

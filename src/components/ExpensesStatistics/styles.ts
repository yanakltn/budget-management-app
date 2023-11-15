import { Box, Stack, Typography, styled } from "@mui/material";

export const ExpenseTypography = styled(Typography)({
  color: "#615C5C",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const ExpensesContainer = styled(Stack)({
  justifyContent: "space-between",
  marginBottom: "24px",
  alignItems: "center",
});
export const ExpensesItems = styled(Stack)({
  borderRadius: "21px",
  background: "#FAFAFA",
  padding: "20px 14px",
});

export const ExpensePercentage = styled(Box)({
  borderRadius: "13px",
  backgroundColor: "#8635F7",
  height: "13px",
});

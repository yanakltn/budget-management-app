import { Box, Typography, styled } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const CardTitleTypography = styled(Typography)({
  color: "#FAFAFA",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
});

export const CardContainer = styled(Box)({
  width: "285px",
  height: "34px",
  backgroundColor: "#9A63FB",
  borderRadius: "24px 24px 0 0",
});

export const StyledCardBox = styled(Box)({
  width: "100%",
  height: "187px",
  backgroundColor: "#2F3046",
  borderRadius: "24px",
  padding: "23px 30px",
  position: "relative",
});
export const StyledMoreHorizIcon = styled(MoreHorizIcon)({
  position: "absolute",
  top: "9px",
  right: "27px",
  color: "#FAFAFA",
});
export const BalanceTypography = styled(Typography)({
  color: "#FFF",
  fontFamily: "Roboto",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});

export const CardNumberTypography = styled(Typography)({
  color: "#A3A3A3",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
});

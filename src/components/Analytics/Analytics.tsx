import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { SectionTitleTypography } from "../commonStyles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AnalyticsButton = styled(Button)({
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
type MockAnalyticsDataType = {
  amount: number;
  month: string;
  enabled: boolean;
};
const MockAnalyticsData: MockAnalyticsDataType[] = [
  { amount: 1234, month: "Jan", enabled: false },
  { amount: 2234, month: "Feb", enabled: false },
  { amount: 5234, month: "Mar", enabled: true },
  { amount: 2234, month: "Apr", enabled: false },
  { amount: 1000, month: "May", enabled: false },
  { amount: 2900, month: "Jun", enabled: false },
  { amount: 3900, month: "Jul", enabled: false },
];

export const MonthTypography = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
const Analytics = () => {
  return (
    <Box marginBottom="32px">
      <Stack direction="row" justifyContent="space-between" marginBottom="24px">
        <SectionTitleTypography>Analytics</SectionTitleTypography>
        <AnalyticsButton variant="contained" endIcon={<ArrowDropDownIcon />}>
          Year - 2022
        </AnalyticsButton>
      </Stack>
      <Stack direction="column">
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          {MockAnalyticsData.map((item) => (
            <Stack direction="column" alignItems="center">
              <MonthTypography
                fontSize="10px"
                color={item.enabled ? "#8234F8" : "#A3A3A3"}
              >
                ${item.amount}
              </MonthTypography>
              <Box
                height={Math.floor(item.amount / 33)}
                width="31px"
                bgcolor={item.enabled ? "#8234F8" : "#FAFAFA"}
                borderRadius="6px 6px 0px 0px"
                marginBottom="16px"
              />
              <MonthTypography
                fontSize="13px"
                color={item.enabled ? "#8234F8" : "#A3A3A3"}
              >
                {item.month}
              </MonthTypography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Analytics;

// mui components
import { Box, Stack } from "@mui/material";
// styles
import { SectionTitleTypography } from "../commonStyles";
import { AnalyticsButton, MonthTypography, StyledBarExpenses } from "./styles";
//icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// types
import { MockAnalyticsData } from "./types";

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
          {MockAnalyticsData.map((item, index) => (
            <Stack direction="column" alignItems="center" key={index}>
              <MonthTypography
                fontSize="10px"
                color={item.enabled ? "#8234F8" : "#A3A3A3"}
              >
                ${item.amount}
              </MonthTypography>
              <StyledBarExpenses
                height={Math.floor(item.amount / 33)}
                bgcolor={item.enabled ? "#8234F8" : "#FAFAFA"}
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

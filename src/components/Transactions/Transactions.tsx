// mui components
import { Box, Stack } from "@mui/material";
//styles
import {
  SectionTitleTypography,
  TransactionAmount,
  TransactionDescription,
  TransactionTitle,
  ViewAllTypography,
} from "../commonStyles";
import { TransactionStack } from "./styles";
// types
import { TransactionList } from "./types";

const Transactions = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" marginBottom="24px">
        <SectionTitleTypography>Transactions</SectionTitleTypography>
        <ViewAllTypography>View all</ViewAllTypography>
      </Stack>
      <Stack direction="column" gap="16px">
        {TransactionList.map((item, index) => (
          <TransactionStack key={index} direction="row" gap="16px">
            {item.icon}
            <Stack direction="column" width="100%" gap="4px">
              <Stack direction="row" justifyContent="space-between">
                <TransactionTitle>{item.name}</TransactionTitle>
                <TransactionAmount color="#2BB272">
                  ${item.amount}
                </TransactionAmount>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <TransactionDescription>{item.from}</TransactionDescription>
                <TransactionDescription>
                  {item.date.toLocaleDateString("en-AU", {
                    weekday: "short",
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })}
                </TransactionDescription>
              </Stack>
            </Stack>
          </TransactionStack>
        ))}
      </Stack>
    </Box>
  );
};

export default Transactions;

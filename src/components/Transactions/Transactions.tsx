import { Box, Stack, Typography, styled } from "@mui/material";
import { SectionTitleTypography } from "../commonStyles";
import { ReactElement } from "react";
import { ReactComponent as NikeIcon } from "../../assets/nike-icon.svg";
import { ReactComponent as PumaIcon } from "../../assets/puma-icon.svg";

export const ViewAllTypography = styled(Typography)({
  color: "#A3A3A3",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  cursor: "pointer",
});
type TransactionItem = {
  name: string;
  from: string;
  date: Date;
  amount: number;
  icon: ReactElement;
};
const TransactionList: TransactionItem[] = [
  {
    name: "Nike Super Store",
    from: "Bank Account",
    date: new Date(2022, 3, 5),
    amount: 475,
    icon: <NikeIcon />,
  },
  {
    name: "Puma Store",
    from: "Bank Account",
    date: new Date(2022, 3, 5),
    amount: 952,
    icon: <PumaIcon />,
  },
];

export const TransactionTitle = styled(Typography)({
  color: "#000",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
});

export const TransactionDescription = styled(Typography)({
  color: "#A3A3A3",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const TransactionAmount = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
});

const Transactions = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" marginBottom="24px">
        <SectionTitleTypography>Transactions</SectionTitleTypography>
        <ViewAllTypography>View all</ViewAllTypography>
      </Stack>
      <Stack direction="column" gap="16px">
        {TransactionList.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            gap="16px"
            bgcolor="#FAFAFA"
            borderRadius={"10px"}
            padding="10px"
            alignItems="center"
          >
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
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Transactions;

import { Stack } from "@mui/material";
import Account from "./Account";

export type AccountValues = {
  mainColor: string;
  cardColor: string;
  totalBalance: string;
  title: string;
  cardNumber: string;
};

const accounts: AccountValues[] = [
  {
    mainColor: "#8635F7",
    cardColor: "rgba(122, 77, 190, 0.50)",
    totalBalance: "76,22.00",
    title: "Bank Account",
    cardNumber: "**** **** 1965",
  },
  {
    mainColor: "#FF643B",
    cardColor: "rgba(203, 82, 50, 0.50)",
    totalBalance: "76,22.00",
    title: "Bank Account",
    cardNumber: "**** **** 1965",
  },
];
const AccountInfo = () => {
  return (
    <Stack direction="row" justifyContent="space-between" gap="20px">
      {accounts.map((acc, index) => (
        <Account account={acc} key={index} />
      ))}
    </Stack>
  );
};

export default AccountInfo;

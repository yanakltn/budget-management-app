// mui components
import { Stack } from "@mui/material";
// components
import Account from "./Account";
// types
import { accounts } from "./types";

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

import { ReactElement } from "react";
// assets
import { ReactComponent as NikeIcon } from "../../assets/nike-icon.svg";
import { ReactComponent as PumaIcon } from "../../assets/puma-icon.svg";

export type TransactionItem = {
  name: string;
  from: string;
  date: Date;
  amount: number;
  icon: ReactElement;
};
export const TransactionList: TransactionItem[] = [
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

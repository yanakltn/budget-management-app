import { ReactElement } from "react";
import { ReactComponent as NikeIcon } from "../../assets/nike-icon.svg";

export type Expense = {
  name: string;
  totalSpend: number;
  totalBudget: number;
  from: string;
  date: Date;
  icon: ReactElement;
};

export const ExpensesList: Expense[] = [
  {
    name: "Nike Super Store",
    totalSpend: 2486,
    totalBudget: 3000,
    from: "Bank account",
    date: new Date(2022, 3, 15),
    icon: <NikeIcon />,
  },
  {
    name: "Nike Super Store",
    totalSpend: 1948,
    totalBudget: 3000,
    from: "Bank account",
    date: new Date(2022, 3, 22),
    icon: <NikeIcon />,
  },
  {
    name: "Nike Super Store",
    totalSpend: 1200,
    totalBudget: 3000,
    from: "Bank account",
    date: new Date(2022, 3, 24),
    icon: <NikeIcon />,
  },
  {
    name: "Nike Super Store",
    totalSpend: 2839,
    totalBudget: 3000,
    from: "Bank account",
    date: new Date(2022, 3, 25),
    icon: <NikeIcon />,
  },
];
